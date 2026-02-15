# AI Agents Development Guide

This document provides guidance for AI agents (like Claude, ChatGPT, GitHub Copilot, etc.) working on the Agentic Lab landing page project.

## Project Context

**Project Name**: Agentic Lab Landing Page  
**Purpose**: Landing page for an AI Community and Club focused on building intelligent agents  
**Tech Stack**: Next.js 16 + TypeScript + Tailwind CSS 3  
**Design Reference**: Inspired by Maya Cafe (https://maya-cafe.netlify.app/)

## Design Principles

### 1. Color Palette (OKLCH)
The project uses OKLCH color space for perceptually uniform colors:

```typescript
// Stone palette (primary)
stone-900: 'oklch(21.6% .006 56.043)'  // Dark background
stone-600: 'oklch(44.4% .011 73.639)'  // Navbar background
stone-500: 'oklch(62.2% .011 56.043)'  // Borders
stone-400: 'oklch(75.7% .009 56.366)'  // Links
stone-300: 'oklch(86.9% .005 56.366)'  // Primary text
stone-200: 'oklch(90.5% .006 56.043)'  // Hover states

// Coffee palette (accents)
coffee-500: '#a68c85'  // Text shadows
coffee-200: '#e2ccb2'  // Glow effects
```

### 2. Typography
- **Primary Font**: Lexend (100-900 weights) - Clean, modern sans-serif
- **Accent Font**: Klee One - Handwriting-style font for special elements

### 3. Animation
- **Snow Effect**: Canvas-based particle system (NOT DOM elements)
  - 150 particles
  - Size: 1-2px (small white dots)
  - Color: Solid white (#ffffff)
  - Speed: 0.5-1.5px/frame
  - Drift: -0.25 to 0.25px/frame horizontal movement

### 4. Responsive Design
- **Mobile**: < 768px - Hamburger menu, single column
- **Tablet**: 768px - 1024px - Transitional layout
- **Desktop**: ≥ 1024px - Full navigation, multi-column

## Component Patterns

### Gradient Button Wrapper
```tsx
<div className="p-[3px] rounded-lg bg-gradient-to-br from-stone-400 to-stone-600">
  <div className="bg-stone-900 rounded-lg px-4 py-2">
    {/* Button content */}
  </div>
</div>
```

### Mobile Menu Toggle
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Mobile button (visible < 768px)
<button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {/* Hamburger icon */}
</button>

// Desktop menu (visible ≥ 768px)
<div className="hidden md:flex">
  {/* Navigation links */}
</div>
```

### Shiny Text Effect
```css
.shiny {
  color: #fff;
  text-shadow: -1px -1px #a68c85, 1px -1px #a68c85, 
               -1px 1px #a68c85, 1px 1px #a68c85;
  filter: drop-shadow(0 0 0.3rem #e2ccb2);
}
```

## File Organization

### Component Structure
```
components/
├── SnowAnimation.tsx    # Canvas particle system
├── Navigation.tsx       # Responsive navbar with mobile menu
├── Header.tsx          # Navigation wrapper
├── Footer.tsx          # Site footer
├── TabContent.tsx      # Generic tabbed interface
└── ScrollToTop.tsx     # Floating scroll button
```

### Page Structure
```
pages/
├── _app.tsx           # Global app wrapper
├── index.tsx          # Home page with tabs
└── socials.tsx        # Social links page
```

## TypeScript Guidelines

### Type Safety
- Use `interface` for component props
- Avoid `any` - use proper types or `unknown`
- Use `React.FC` or explicit return types for components

### Example Component Type
```typescript
interface TabContentProps {
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
  }>;
}

export default function TabContent({ tabs }: TabContentProps) {
  // Component implementation
}
```

## Tailwind CSS Usage

### Preferred Utilities
- Use Tailwind utilities over custom CSS when possible
- For complex effects (like `.shiny`), use `@layer components`
- Avoid arbitrary values unless necessary (prefer theme values)

### Spacing Scale
- Use consistent spacing: `p-4`, `px-8`, `py-2`, etc.
- Gap utilities: `gap-4`, `gap-8` for flex/grid containers

### Responsive Breakpoints
```typescript
sm: '40rem'   // 640px
md: '48rem'   // 768px
lg: '64rem'   // 1024px
xl: '80rem'   // 1280px
2xl: '96rem'  // 1536px
```

## Common Tasks

### Adding a New Page
1. Create `pages/pagename.tsx`
2. Import layout components (Header, Footer, SnowAnimation)
3. Add navigation link to `Navigation.tsx`
4. Follow existing page structure

### Modifying Colors
1. Update `tailwind.config.ts` theme.extend.colors
2. Use OKLCH format for consistency: `oklch(L% C H)`
3. Maintain contrast ratios for accessibility

### Adding Animation
1. Define keyframes in `tailwind.config.ts`
2. Add to theme.extend.animation
3. Use as Tailwind class: `animate-[name]`

## Testing

### Playwright Tests
Location: `tests/basic.spec.ts`

Key test scenarios:
- Page loads without errors
- Navigation works (desktop & mobile)
- Tabs switch correctly
- Mobile menu toggles
- Social links are present
- Responsive layouts at 375px, 768px, 1920px

### Running Tests
```bash
npx playwright test              # Headless
npx playwright test --headed     # Show browser
npx playwright test --debug      # Debug mode
```

## Build & Deployment

### Development
```bash
npm run dev  # Starts on :3000 (or :3001 if occupied)
```

### Production Build
```bash
npm run build   # Next.js build
npm run export  # Static export
```

### Netlify Deployment
- Automatic via Git push to main branch
- Build command: `npm run build && npm run export`
- Publish directory: `out`

## Common Issues & Solutions

### Issue: Port 3000 in use
**Solution**: Next.js auto-switches to 3001, update Playwright config if needed

### Issue: Tailwind not applying
**Solution**: 
1. Check `tailwind.config.ts` content array includes your files
2. Restart dev server
3. Clear `.next` folder: `rm -rf .next`

### Issue: TypeScript errors
**Solution**: Run `npx tsc --noEmit` to see all errors

### Issue: Snow animation not visible
**Solution**: 
1. Check canvas has `position: fixed` and `z-index: 0`
2. Verify snowflakes are white (#ffffff) on dark background
3. Ensure canvas covers full viewport

## Agent-Specific Guidelines

### When Adding Features
1. Check existing components for similar patterns
2. Maintain TypeScript type safety
3. Follow Tailwind-first approach
4. Test mobile responsiveness
5. Ensure accessibility (ARIA labels, semantic HTML)

### When Fixing Bugs
1. Read error messages carefully
2. Check browser console
3. Verify TypeScript compilation
4. Test in both mobile and desktop viewports

### When Refactoring
1. Don't break existing functionality
2. Maintain consistent code style
3. Update types if changing interfaces
4. Run tests after changes

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [OKLCH Color Picker](https://oklch.com/)

## Contact

For questions about this codebase:
- Created by: Agentic Lab Core Team
- Community: [Telegram](https://t.me/+mNVOoDBnPxs2MTgy), [Discord](https://discord.gg/3u3ZseCK7v)
- Instagram: [@agentic_lab](https://www.instagram.com/agentic_lab)

---

*Last updated: February 15, 2026*
