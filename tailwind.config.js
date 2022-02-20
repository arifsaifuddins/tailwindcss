module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dev: '#ff0000',
      },
      spacing: {
        '13': '3.25rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        my: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
