import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
  },
}
