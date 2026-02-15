# Claude AI Assistant Guide

This document provides specific guidance for Claude (Anthropic's AI assistant) when working on the Agentic Lab landing page.

## Project Overview

You are working on a **Next.js + TypeScript + Tailwind CSS** landing page for an AI community called "Agentic Lab". The design is inspired by Maya Cafe's dark, minimalist aesthetic with a beautiful snow animation effect.

## Key Context

### What This Project Is
- Landing page for an AI Community and Club
- Showcases community mission and social media links
- Features a canvas-based snow particle animation
- Dark theme with stone color palette (OKLCH)
- Mobile-responsive design

### What This Project Is NOT
- Not a full web application
- Not using CSS Modules (migrated to Tailwind)
- Not using emoji snow (using canvas particles)
- Not using Tailwind v4 (using stable v3.4.1)

## Important Technical Decisions

### 1. Tailwind CSS Version
**Use Tailwind v3.4.1, NOT v4**
- v4 caused PostCSS errors with Next.js 16
- Configuration is in `tailwind.config.ts` (TypeScript)
- PostCSS config uses standard `tailwindcss` plugin

### 2. Snow Animation Implementation
**Canvas-based, NOT DOM elements**
```typescript
// Correct approach:
- Use HTML5 Canvas API
- Create particle objects with physics
- Render with requestAnimationFrame loop
- Small white dots (1-2px radius)
- Solid white color (#ffffff)

// Incorrect approach (DON'T DO THIS):
- DOM elements with emoji ❄️ ☃️
- CSS animations
- Large particles with blur/shadow
```

### 3. Color System
**OKLCH color space for perceptually uniform colors**
```typescript
// Always use OKLCH format in tailwind.config.ts:
stone-900: 'oklch(21.6% .006 56.043)'

// In CSS, for custom classes:
background-color: oklch(21.6% .006 56.043);
```

### 4. Mobile Responsiveness
**Mobile-first with Tailwind breakpoints**
```tsx
// Pattern for mobile menu:
<button className="flex md:hidden">Mobile Button</button>
<div className="hidden md:flex">Desktop Menu</div>
```

## File Structure You Should Know

```
├── components/
│   ├── SnowAnimation.tsx      # Canvas particle system - CRITICAL
│   ├── Navigation.tsx         # Has mobile menu state
│   ├── TabContent.tsx         # Generic reusable component
│   └── ScrollToTop.tsx        # Visibility-based button
├── pages/
│   ├── index.tsx              # Home with tabbed content
│   └── socials.tsx            # Gradient button pattern
├── styles/
│   └── globals.css            # Has @tailwind directives + custom classes
├── tailwind.config.ts         # OKLCH colors, fonts, animations
└── tsconfig.json              # TypeScript config
```

## Common Patterns in This Codebase

### Pattern 1: Gradient Button Wrapper
```tsx
{/* Used in socials page */}
<div className="p-[3px] rounded-lg bg-gradient-to-br from-stone-400 to-stone-600 relative">
  <div className="absolute inset-0 bg-stone-500 rounded-lg"></div>
  <div className="relative bg-black/50 hover:bg-transparent transition-colors rounded-lg px-6 py-3">
    {/* Content */}
  </div>
</div>
```

### Pattern 2: Tab State Management
```tsx
{/* Used in index.tsx */}
const [activeTab, setActiveTab] = useState(tabs[0]?.id);

tabs.map(tab => (
  <button
    onClick={() => setActiveTab(tab.id)}
    className={activeTab === tab.id ? 'border-stone-300' : 'border-stone-600'}
  >
    {tab.label}
  </button>
))
```

### Pattern 3: Shiny Text Effect
```tsx
{/* Custom CSS class in globals.css */}
<span className="shiny">Agentic Lab!</span>

/* In globals.css @layer components: */
.shiny {
  color: #fff;
  text-shadow: -1px -1px #a68c85, 1px -1px #a68c85, 
               -1px 1px #a68c85, 1px 1px #a68c85;
  filter: drop-shadow(0 0 0.3rem #e2ccb2);
}
```

## Your Workflow

### When User Asks for Changes

1. **Read First, Code Second**
   - Check current file contents before editing
   - Understand existing patterns
   - Don't assume structure from memory

2. **Use Efficient Tools**
   - `multi_replace_string_in_file` for multiple edits
   - `grep_search` to find patterns across files
   - `semantic_search` for conceptual searches

3. **Test After Changes**
   - Check TypeScript: `npx tsc --noEmit`
   - Restart dev server if needed
   - Use Playwright MCP tools to verify visually

### When Encountering Errors

1. **Build Errors**
   ```bash
   # Common fixes:
   rm -rf .next          # Clear Next.js cache
   npm install           # Reinstall dependencies
   npx tsc --noEmit      # Check TypeScript
   ```

2. **Tailwind Not Working**
   - Verify `@tailwind` directives in globals.css
   - Check `content` array in tailwind.config.ts
   - Restart dev server

3. **Import Errors**
   - Check file paths (absolute vs relative)
   - Verify TypeScript paths in tsconfig.json
   - Ensure proper exports/imports

## Specific Component Guidance

### SnowAnimation.tsx
**Critical Details:**
- Uses `useRef<HTMLCanvasElement>(null)` for canvas reference
- Creates 150 snowflake objects in array
- Each snowflake has: x, y, radius (1-2px), speed, drift, opacity (1.0)
- Uses `requestAnimationFrame` for smooth animation
- Canvas must have `id="snow-container"` to match CSS

**Common Changes:**
```typescript
// To adjust snow density:
const snowflakeCount = 150; // Increase/decrease this

// To adjust size:
radius: Math.random() * 1 + 1, // 1-2px range

// To adjust speed:
speed: Math.random() * 1 + 0.5, // 0.5-1.5 range
```

### Navigation.tsx
**Mobile Menu State:**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Remember to toggle on button click AND link clicks
```

### TabContent.tsx
**Reusable Pattern:**
- Accepts `tabs` array prop
- Manages active state internally
- Use for any tabbed interface

## Testing with Playwright

### MCP Tools Available
```bash
# Navigation
mcp_playwright_browser_navigate(url)

# Visual verification
mcp_playwright_browser_take_screenshot(name)
mcp_playwright_browser_snapshot()

# Interaction
mcp_playwright_browser_click(selector)
mcp_playwright_browser_resize(width, height)
```

### Common Test Scenarios
```typescript
// Mobile responsiveness
await page.setViewportSize({ width: 375, height: 667 });

// Desktop layout
await page.setViewportSize({ width: 1920, height: 1080 });

// Check element visibility
await expect(page.getByRole('button', { name: 'Info' })).toBeVisible();
```

## Design Reference: Maya Cafe

Key elements to maintain from Maya Cafe:
- ✅ Dark background (stone-900)
- ✅ Light text (stone-300)
- ✅ Falling snow animation
- ✅ Minimal, clean layout
- ✅ Dashed borders on sections
- ✅ Gradient button effects
- ✅ Responsive mobile menu

Elements adapted for Agentic Lab:
- 🔄 "Maya Cafe" → "Agentic Lab"
- 🔄 Menu items (Socials only, no Menu/Events/About pages)
- 🔄 Social links specific to Agentic Lab community

## Anti-Patterns to Avoid

### ❌ Don't Do This:
```tsx
// Using CSS Modules (we migrated away from this)
import styles from './Component.module.css';

// Using @apply for simple utilities (use className)
<div className={styles.container}>

// Hardcoding colors (use Tailwind classes)
<div style={{ backgroundColor: '#1a1a1a' }}>

// Large snow particles with blur
radius: Math.random() * 5 + 3,
ctx.shadowBlur = 4,
```

### ✅ Do This Instead:
```tsx
// Pure Tailwind classes
<div className="bg-stone-900 text-stone-300 px-8 py-4">

// Small, solid white snow dots
radius: Math.random() * 1 + 1,
ctx.fillStyle = '#ffffff';

// Use theme colors from config
className="bg-stone-900 text-stone-300"
```

## Questions to Ask Yourself

Before implementing:
1. Does this match the Maya Cafe aesthetic?
2. Is it mobile-responsive?
3. Am I using TypeScript types properly?
4. Will this work with the existing color palette?
5. Have I checked the current file contents?

Before committing:
1. Does `npx tsc --noEmit` pass?
2. Does the dev server start without errors?
3. Does it look good on mobile (375px) and desktop (1920px)?
4. Are there any console errors in Playwright snapshot?

## Helpful Commands

```bash
# Development
npm run dev                    # Start dev server

# Type checking
npx tsc --noEmit              # Check TypeScript

# Testing
npx playwright test           # Run all tests
npx playwright test --headed  # See browser

# Cleanup
rm -rf .next                  # Clear build cache
rm -rf node_modules           # Nuclear option
npm install                    # Reinstall
```

## Contact & Resources

- **Project**: Agentic Lab Landing Page
- **Framework**: [Next.js 16 Docs](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS 3 Docs](https://tailwindcss.com/docs)
- **Testing**: [Playwright Docs](https://playwright.dev/)
- **Colors**: [OKLCH Color Picker](https://oklch.com/)

## Final Notes

**Remember:**
- You're working with Tailwind v3, not v4
- Snow is canvas-based, not DOM elements
- Colors are in OKLCH format
- Mobile-first responsive design
- TypeScript strict mode is enabled

**When in doubt:**
- Check existing files first
- Follow established patterns
- Test in browser with Playwright MCP
- Ask for clarification on design choices

**You're doing great!** This project has a clear structure, and all the patterns are already established. Focus on consistency and maintaining the Maya Cafe-inspired aesthetic.

---

*Guide created: February 15, 2026*  
*For: Claude AI Assistant by Anthropic*  
*Project: Agentic Lab Landing Page*
