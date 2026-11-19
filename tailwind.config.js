/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: 'var(--ocean)',
        aqua: 'var(--aqua)',
        sand: 'var(--sand)',
        bg: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        mute: 'var(--mute)',
        line: 'var(--line)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
