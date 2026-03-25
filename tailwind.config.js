/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        // Original brand colors - preserved
        indigo: {
          DEFAULT: '#272162',
          dark: '#1A1644',
          mid: '#2E2878',
          light: '#36308A',
        },
        teal: {
          DEFAULT: '#1CCC9F',
          dark: '#1E8B8A',
          mid: '#17A384',
          dim: '#0E5554',
          pale: '#C8F0E6',
          50: '#EAF9F5',
          20: '#F3FDF9',
        },
        // Light surface system
        cream: {
          DEFAULT: '#F8F9FC',
          100: '#FFFFFF',
          200: '#F2F4F9',
          300: '#E8ECF4',
          400: '#DDE2EE',
        },
        ink: {
          DEFAULT: '#0D0E1C',
          900: '#0D0E1C',
          800: '#181A2E',
          700: '#252848',
          600: '#374062',
          500: '#4E587A',
          400: '#6B7590',
          300: '#8E96AA',
          200: '#B8BDC8',
          100: '#DDE0E8',
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(30, 139, 138, 0.3)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'blink': 'blink 2.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
}