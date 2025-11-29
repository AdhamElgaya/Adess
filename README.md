# Adess - Classic & Casual Clothing Store

A sophisticated e-commerce website for classic and casual clothing, featuring an elegant design inspired by timeless fashion.

## Features

- 🎨 Elegant, classical design matching the Adess brand aesthetic
- 🛍️ Product catalog with detailed product pages
- 📱 Fully responsive design
- 🖼️ Beautiful product imagery
- ⚡ Built with Next.js 14 and React
- 🎯 Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── page.tsx        # Homepage
│   ├── products/       # Product pages
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── Navigation.tsx  # Header navigation
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   └── ...
├── lib/               # Utility functions
│   └── products.ts    # Product data
└── public/            # Static assets
    └── logo.jpeg      # Brand logo
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages.

### Setup Instructions

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it whatever you want (e.g., `adess-clothing`)

2. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

4. **Access your site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - It may take a few minutes for the first deployment to complete

### Manual Build (Optional)

To build the static site locally:
```bash
npm run build
```

The static files will be in the `out` directory.

## Notes

- Payment functionality is not implemented (as requested)
- Product images are sourced from Unsplash
- All product data is mockup data for demonstration

