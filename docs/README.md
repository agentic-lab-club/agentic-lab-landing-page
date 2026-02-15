# Agentic Lab Landing Page - Documentation

This directory contains documentation for the Agentic Lab landing page project.

## Project Overview

The Agentic Lab landing page is a Next.js-based website built for the AI Community and Club. It showcases the community's mission, activities, and provides social media links for engagement.

## Tech Stack

- **Framework**: Next.js 16.0.7 (with Turbopack)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.1
- **Testing**: Playwright 1.58.2
- **Deployment**: Netlify

## Key Features

### 1. **Snow Animation**
- Canvas-based particle system
- 150 small white dots (1-2px) falling like snow
- Solid white color (#ffffff) for clarity
- Smooth animation with horizontal drift

### 2. **Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Hamburger menu for mobile devices (< 768px)
- Desktop navigation menu (≥ 768px)
- Adaptive logo sizing

### 3. **Color Scheme**
Uses OKLCH color space for perceptually uniform colors:
- **Background**: stone-900 `oklch(21.6% .006 56.043)` - Dark background
- **Text**: stone-300 `oklch(86.9% .005 56.366)` - Light text
- **Accents**: stone-400, stone-500, stone-600 for various UI elements
- **Coffee tones**: Used for special text effects (#a68c85, #e2ccb2, etc.)

### 4. **Pages**
- **Home** (`/`) - Welcome section with tabbed content (Info, About, W I P)
- **Socials** (`/socials`) - Social media links with gradient button effects

### 5. **Components**
- `SnowAnimation.tsx` - Canvas particle system
- `Navigation.tsx` - Responsive navbar with mobile menu
- `Header.tsx` - Navigation wrapper
- `Footer.tsx` - Site footer with branding
- `TabContent.tsx` - Generic tabbed interface component
- `ScrollToTop.tsx` - Scroll-triggered back-to-top button

## Development

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens at [http://localhost:3000](http://localhost:3000) (or 3001 if port is occupied)

### Build
```bash
npm run build
```

### TypeScript Check
```bash
npx tsc --noEmit
```

## Testing

### Playwright Tests
```bash
# Install browsers (first time only)
npx playwright install chromium

# Run tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# View test report
npx playwright show-report
```

### Test Coverage
- Home page loading and content
- Tabbed interface functionality
- Navigation links
- Social page buttons
- Mobile responsiveness (375x667)
- Desktop layout (1920x1080)

## Design Reference

This project is inspired by [Maya Cafe](https://maya-cafe.netlify.app/) with:
- Dark stone color palette
- Snow animation effect
- Minimalist, modern design
- Gradient button wrappers
- Shiny text effects

## Deployment

### Netlify
The project is configured for Netlify deployment via `netlify.toml`:
```toml
[build]
  command = "npm run build && npm run export"
  publish = "out"
```

### Environment Variables
No environment variables are required for basic deployment.

## File Structure

```
agentic-lab-landing-page/
├── components/          # React components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── ScrollToTop.tsx
│   ├── SnowAnimation.tsx
│   └── TabContent.tsx
├── docs/               # Documentation
│   ├── maya_homepage/  # Reference HTML files
│   └── maya_socialspage/
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Home page
│   └── socials.tsx     # Socials page
├── public/             # Static assets
│   ├── agentic-lab-ai-community-core-red-500-500.svg
│   └── favicon.ico
├── styles/             # Global styles
│   └── globals.css     # Tailwind + custom styles
├── tests/              # Playwright tests
│   └── basic.spec.ts
├── .gitignore
├── netlify.toml
├── next.config.js
├── package.json
├── playwright.config.ts
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Contributing

This project is maintained by the Agentic Lab Core Team. For questions or contributions:
- Instagram: [@agenticlab](https://instagram.com/agenticlab)
- Telegram: [@agenticlab](https://t.me/agenticlab)
- Discord: [Join Server](https://discord.gg/agenticlab)

## License

© 2026 Agentic Lab. All rights reserved.
