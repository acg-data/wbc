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
        cream: {
          DEFAULT: '#F8F6F2',
          100: '#FDFCFA',
          200: '#F8F6F2',
          300: '#F0EBE0',
        },
        ink: {
          DEFAULT: '#0A0D14',
          900: '#0A0D14',
          800: '#141824',
          700: '#23293B',
          600: '#353D52',
          500: '#4D566E',
          400: '#69748E',
          300: '#8A95AE',
          200: '#AFB8CD',
          100: '#D9DFED',
        },
        hunter: {
          DEFAULT: '#1A4D3E',
          dark: '#113329',
          light: '#26735D',
        },
        oxblood: {
          DEFAULT: '#6A1920',
          dark: '#471115',
        },
        gold: {
          DEFAULT: '#C3A35B',
          light: '#DCC898',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(195, 163, 91, 0.3)',
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