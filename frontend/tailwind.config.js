/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Classic Gameboy green palette
        'gb-darkest': '#0f380f',
        'gb-dark': '#306230',
        'gb-light': '#8bac0f',
        'gb-lightest': '#9bbc0f',
        'gb-screen': '#8bac0f',
        'gb-body': '#c4cfa1',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

