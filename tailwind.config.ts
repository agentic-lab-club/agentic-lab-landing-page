import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: 'oklch(98.5% .001 106.423)',
          100: 'oklch(95.3% .004 56.366)',
          200: 'oklch(90.5% .006 56.043)',
          300: 'oklch(86.9% .005 56.366)',
          400: 'oklch(75.7% .009 56.366)',
          500: 'oklch(62.2% .011 56.043)',
          600: 'oklch(44.4% .011 73.639)',
          700: 'oklch(36.5% .011 61.794)',
          800: 'oklch(29.4% .010 73.639)',
          900: 'oklch(21.6% .006 56.043)',
          950: 'oklch(15.3% .004 73.639)',
        },
        coffee: {
          100: '#f5ede8',
          200: '#e2ccb2',
          300: '#d9b091',
          400: '#c59a7a',
          500: '#a68c85',
        },
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        klee: ['Klee One', 'cursive'],
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'text-pop': 'text-pop 0.5s ease-out',
        'scroll': 'scroll 2s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'text-pop': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
