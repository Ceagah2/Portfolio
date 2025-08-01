import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // --- BACKGROUNDS ---
        primaryBg: "#191131", // Fundo principal
        secondaryBg: "#0E0A1F", // Fundo secundário (ajustado p/ contraste)
        cardBg: "#1a1a1a", // Fundo dos cards
        backgroundLight: "#2A475E", // Destaques (cards/elementos)

        // --- TEXTO ---
        textPrimary: "#C7D5E0",
        textSecondary: "#8F98A0",
        textMuted: "#6B7280", // Novo: cinza neutro para textos menos importantes

        // --- ACCENTS ---
        accent: {
          DEFAULT: "#66C0F4",
          light: "#8ACFFF", // Hover/estado leve
          dark: "#3B8FC2", // Estado ativo
        },

        // --- FEEDBACK ---
        success: "#5C7E10",
        warning: "#B8920B",
        error: "#A23427",

        // --- EXTRA ---
        radiantPink: "#DD2A7B",
        border: "#4D4D4D",
        white: "#FFFFFF",
        shadow: "rgba(0, 0, 0, 0.2)",
      },

      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #152044, #201e3c)",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Secundária (texto corrido)
        heading: ["Poppins", "sans-serif"], // Títulos
        steam: ['"Motiva Sans"', "sans-serif"], // Alternativa Steam
      },

      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
      },

      fontSize: {
        sm: "0.75rem",
        base: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
