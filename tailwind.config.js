/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0906',
        gold: '#c9a24e',
        'gold-light': '#e0c87d',
        'gold-dim': '#8b6914',
        parchment: '#e8e0d0',
        'warm-gray': '#9a9282',
        'card-bg': '#12100c',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', 'serif'],
        body: ['"Noto Serif SC"', '"STSong"', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'gold-spin': 'gold-spin 60s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
      keyframes: {
        'gold-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
