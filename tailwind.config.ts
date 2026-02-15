const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: 'oklch(98.5% .001 106.423)',
          100: 'oklch(97% .001 106.424)',
          200: 'oklch(92.3% .003 48.717)',
          300: 'oklch(86.9% .005 56.366)',
          400: 'oklch(70.9% .01 56.259)',
          500: 'oklch(55.3% .013 58.071)',
          600: 'oklch(44.4% .011 73.639)',
          700: 'oklch(37.4% .01 67.558)',
          800: 'oklch(26.8% .007 34.298)',
          900: 'oklch(21.6% .006 56.043)',
        },
        coffee: {
          light: '#e2ccb2',
          DEFAULT: '#a68c85',
          shadow: '#57534d',
          hover: '#d9b091',
        },
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        klee: ['"Klee One"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'text-pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'text-pop': 'text-pop 0.3s ease-in-out',
        scroll: 'scroll 40s linear infinite',
      },
      screens: {
        'sm': '40rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
        '2xl': '96rem',
      },
    },
  },
  plugins: [],
}

export default config
