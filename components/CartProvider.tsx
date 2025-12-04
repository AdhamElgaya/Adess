'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Product } from '@/lib/products'

type CartItem = {
  id: number
  name: string
  price: number
  size?: string | null
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product, options?: { size?: string | null }) => void
  removeItem: (id: number, size?: string | null) => void
  clearCart: () => void
  itemCount: number
  total: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'adess-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load from localStorage on first render (browser only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[]
        setItems(parsed)
      }
    } catch {
      // ignore parse errors and start with empty cart
    }
  }, [])

  // Persist to localStorage whenever items change
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, options?: { size?: string | null }) => {
    setItems((current) => {
      const size = options?.size ?? null
      const existingIndex = current.findIndex(
        (item) => item.id === product.id && (item.size ?? null) === size
      )

      if (existingIndex !== -1) {
        const updated = [...current]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        }
        return updated
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          quantity: 1,
        },
      ]
    })
  }

  const removeItem = (id: number, size?: string | null) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.id === id && (item.size ?? null) === (size ?? null))
      )
    )
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clearCart,
    itemCount,
    total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}


