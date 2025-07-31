import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbarbg: "var(--navbar-background)",
        primary: "var(--primary)",
        primaryHover: "var(--primary-hover)",
        primaryDark: "var(--primary-dark)",
        overlayBg: "var(--overlay-background)",
        gray: {
          0: "var(--gray-0)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          1000: "var(--gray-1000)",
        },
        layerPink: {
          dark: "var(--layer-pink-dark)",
          80: "var(--layer-pink-80)",
        },
        layerPurple: {
          dark: "var(--layer-purple-dark)",
          80: "var(--layer-purple-80)",
        },
        transparentBlack: {
          10: "var(--black-10)",
          20: "var(--black-20)",
          30: "var(--black-30)",
          40: "var(--black-40)",
          50: "var(--black-50)",
          60: "var(--black-60)",
          70: "var(--black-70)",
          80: "var(--black-80)",
          90: "var(--black-90)",
        },
        transparentWhite: {
          10: "var(--white-10)",
          20: "var(--white-20)",
          30: "var(--white-30)",
          40: "var(--white-40)",
          50: "var(--white-50)",
          60: "var(--white-60)",
          70: "var(--white-70)",
          80: "var(--white-80)",
          90: "var(--white-90)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
