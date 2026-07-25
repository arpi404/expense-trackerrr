import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070F",
          900: "#080B1A",
          850: "#0B1024",
          800: "#0F1530",
          700: "#151C3D",
          600: "#1C254D",
          500: "#2A3566",
        },
        gilt: {
          200: "#F6E4BD",
          300: "#EFD498",
          400: "#E4BE72",
          500: "#D4A65A",
          600: "#B98942",
        },
        iris: {
          400: "#8B93FF",
          500: "#6A72F0",
          600: "#5359CF",
        },
        mint: {
          400: "#6FCF9E",
          500: "#4FB884",
        },
        coral: {
          400: "#E58A82",
          500: "#D96C63",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(228,190,114,0.15), 0 20px 60px -20px rgba(228,190,114,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -25px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(120% 120% at 50% -10%, rgba(107,114,240,0.18) 0%, rgba(5,7,15,0) 55%)",
        "grain": "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
