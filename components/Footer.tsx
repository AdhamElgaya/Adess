import Link from 'next/link'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-stone border-t border-charcoal/8 text-charcoal" style={{ paddingTop: 'clamp(3rem, 6vw, 6rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div className="max-w-[1920px] mx-auto container-fluid px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Brand */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-fluid-lg sm:text-fluid-xl font-display font-light tracking-wider">Adess</h3>
              <p className="text-fluid-xs text-charcoal/45 tracking-[0.15em] uppercase">EST 2025</p>
            </div>
            <p className="text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light leading-relaxed max-w-xs">
              Timeless elegance meets modern comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 sm:space-y-4 text-fluid-xs sm:text-fluid-sm">
              <li>
                <Link href="/products" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=classic" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  Classic Collection
                </Link>
              </li>
              <li>
                <Link href="/products?category=casual" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  Casual Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-fluid-xs sm:text-fluid-sm">
              <li>
                <Link href="/about" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-charcoal/55 hover:text-charcoal transition-colors duration-500 font-light">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-charcoal/45 hover:text-charcoal transition-colors duration-500"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-charcoal/45 hover:text-charcoal transition-colors duration-500"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-charcoal/45 hover:text-charcoal transition-colors duration-500"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal/8 pt-8 sm:pt-12 text-center">
          <p className="text-fluid-xs text-charcoal/45 font-light tracking-wider">&copy; 2025 Adess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

