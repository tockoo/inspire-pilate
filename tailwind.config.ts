import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette naturelle — crème, beige, brun chaud, taupe, sable, bois
        cream: "#F7F2EA",
        sand: "#EDE3D3",
        beige: "#E3D6C2",
        taupe: "#B7A78F",
        clay: "#9C8368",
        wood: "#7A5C41",
        umber: "#5C4632",
        ink: "#2E2620",
        offwhite: "#FBF8F2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        content: "1200px",
        wide: "1440px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn: "fadeIn 1.2s ease both",
        slowZoom: "slowZoom 8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
