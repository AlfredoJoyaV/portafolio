import type { Config } from 'tailwindcss'

export default {
  darkMode: 'media', // Detecta automáticamente las preferencias del sistema
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-gradient-start': '#667eea',
        'purple-gradient-end': '#764ba2',
      },
    },
  },
  plugins: [],
} satisfies Config