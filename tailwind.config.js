/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006D77',          // Deep Teal
        secondary: '#83C5BE',        // Soft Sky Blue
        accent: '#3A86FF',           // Bright Blue
        background: '#F7F9FA',       // Light Gray
        surface: '#FFFFFF',          // White
        textPrimary: '#222222',      // Dark Slate
        textSecondary: '#555555',    // Medium Gray
        error: '#FF6B6B',            // Soft Red
        success: '#4CAF50',          // Soft Green
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
