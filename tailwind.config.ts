import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'hero-pattern': "url('/public/images/landing/lowerhalf.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-space)'],
        serif: ['var(--font-dosis)']
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
