/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#06060e',
        'accent-blue': '#4da8da',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
