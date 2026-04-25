import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        kid: {
          ink: "#0c1e3e",
          sky: "#e0f2fe",
          sky2: "#f0f9ff",
        },
      },
      keyframes: {
        kidTwinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        kidPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        kidNovaFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
      },
      animation: {
        "kid-twinkle": "kidTwinkle 2.5s ease-in-out infinite",
        "kid-pulse": "kidPulse 3s ease-in-out infinite",
        "kid-nova-float": "kidNovaFloat 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

