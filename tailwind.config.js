/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#fafaf7',
        paper: '#f4f4ef',
        ink: '#171712',
        muted: '#787870',
        accent: '#2c5f2d',
        'accent-light': '#e8efe8',
        hairline: '#e8e8e2',
      },
      fontFamily: {
        display: ['"DM Sans"', '"Noto Sans SC"', 'sans-serif'],
        body: ['"Noto Sans SC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        section: '10rem',
      },
    },
  },
  plugins: [],
}
