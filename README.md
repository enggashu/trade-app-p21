# P21 VENTURES - Trading Platform

A modern, static trading platform website built with Next.js, inspired by a16z.com's clean and professional design.

## Features

- **Static Site Generation**: Fully static website optimized for performance
- **Modern UI**: Clean, professional design inspired by a16z.com
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Trading Dashboard**: Portfolio overview, market data, and chart visualizations
- **Multiple Pages**: Platform, Markets, Analytics, Portfolio, and About pages

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready to be deployed to any static hosting service.

## Project Structure

```
P21 VENTURES/
├── app/              # Next.js app directory
│   ├── page.tsx      # Homepage
│   ├── layout.tsx    # Root layout
│   ├── globals.css   # Global styles
│   └── [pages]/      # Additional pages
├── components/        # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── TradingDashboard.tsx
│   └── Footer.tsx
├── public/           # Static assets
└── package.json      # Dependencies
```

## Technologies

- **Next.js 14**: React framework with static export
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Modern React features

## Deployment

The static site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

Simply run `npm run build` and deploy the `out` directory.

