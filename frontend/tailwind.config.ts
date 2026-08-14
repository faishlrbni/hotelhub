import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        text: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display1": ["64px", { lineHeight: "76px" }],
        "display2": ["56px", { lineHeight: "68px" }],
        "display3": ["48px", { lineHeight: "60px" }],
        "h1": ["40px", { lineHeight: "50px" }],
        "h2": ["32px", { lineHeight: "42px" }],
        "h3": ["28px", { lineHeight: "38px" }],
        "h4": ["24px", { lineHeight: "32px" }],
        "paragraph1": ["20px", { lineHeight: "28px" }],
        "paragraph2": ["18px", { lineHeight: "26px" }],
        "body1": ["16px", { lineHeight: "24px" }],
        "body2": ["14px", { lineHeight: "20px" }],
        "caption": ["12px", { lineHeight: "16px" }],
        "label1": ["10px", { lineHeight: "13px" }],
        "label2": ["8px", { lineHeight: "10px" }],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          active: "var(--color-primary-active)",
          disabled: "var(--color-primary-disabled)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        luxe: "var(--color-luxe)",
        plus: "var(--color-plus)",
        canvas: "var(--color-[#FAFAFA])",
        background: "var(--color-background)",
        surface: {
          soft: "var(--color-surface-soft)",
          card: "var(--color-surface-card)",
          strong: "var(--color-surface-strong)",
        },
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        muted: {
          DEFAULT: "var(--color-muted)",
          soft: "var(--color-muted-soft)",
        },
        hairline: {
          DEFAULT: "var(--color-hairline)",
          soft: "var(--color-hairline-soft)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        error: {
          text: "var(--color-error-text)",
          hover: "var(--color-error-text-hover)",
        },
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "airbnb-float": "var(--shadow-airbnb-float)",
      },
      spacing: {
        xxs: "var(--spacing-xxs)",
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        base: "var(--spacing-base)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        xxl: "var(--spacing-xxl)",
        section: "var(--spacing-section)",
      },
    },
  },
  plugins: [],
};

export default config;
