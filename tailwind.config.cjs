/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        signica: ["Signika Negative", "Tajawal", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#1a56db',
          dark: '#1e429f',
        },
        secondary: {
          DEFAULT: '#7e3af2',
          dark: '#6c2bd9',
        },
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  // RTL support
  corePlugins: {
    textAlign: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  // RTL mode
  rtl: true,
};
