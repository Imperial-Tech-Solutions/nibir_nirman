/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
        'roboto-serif': ['"Roboto Serif"', 'serif'],
      }
    }
  },
  plugins: [],
};
