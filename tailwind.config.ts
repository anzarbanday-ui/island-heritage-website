import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F8F5F0",
        ink: "#1A1A1A",
        gold: "#B89B5E",
        beige: "#E7DED2",
        evergreen: "#2F4F4F",
        porcelain: "#FFFFFF"
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 28px 80px rgba(26, 26, 26, 0.10)",
        soft: "0 18px 45px rgba(47, 79, 79, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
