import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GTJ cyberpunk palette
        accent: {
          DEFAULT: "#ff2d55",
          light: "#ff5577",
          dark: "#cc1f3f",
        },
        cyan: {
          DEFAULT: "#00d4ff",
          light: "#33ddff",
          dark: "#00a8cc",
        },
        gold: {
          DEFAULT: "#ffd60a",
          light: "#ffe033",
          dark: "#ccab00",
        },
        surface: {
          DEFAULT: "#0f1420",
          light: "#141926",
          dark: "#080b14",
        },
        border: {
          DEFAULT: "#1a2040",
          light: "#243060",
        },
        // Background
        bg: {
          primary: "#0a0a0f",
          secondary: "#080b14",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.04em",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,45,85,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,85,0.05) 1px, transparent 1px)",
        "dot-pattern": "radial-gradient(circle, rgba(255,45,85,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "dot-sm": "24px 24px",
      },
      boxShadow: {
        "neon-red": "0 0 20px rgba(255,45,85,0.4), 0 0 40px rgba(255,45,85,0.2)",
        "neon-cyan": "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.2)",
        "neon-gold": "0 0 20px rgba(255,214,10,0.4), 0 0 40px rgba(255,214,10,0.2)",
        "card-glow": "0 0 0 1px rgba(255,45,85,0.3), 0 8px 32px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-up-delay-1": "fadeUp 0.6s 0.1s ease forwards",
        "fade-up-delay-2": "fadeUp 0.6s 0.2s ease forwards",
        "fade-up-delay-3": "fadeUp 0.6s 0.3s ease forwards",
        "fade-up-delay-4": "fadeUp 0.6s 0.4s ease forwards",
        "glitch": "glitch 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s 3s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,45,85,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255,45,85,0.8), 0 0 60px rgba(255,45,85,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(255,45,85,0.4)" },
          "50%": { borderColor: "rgba(255,45,85,1)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
