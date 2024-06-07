import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "2000px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "128": "32rem",
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "221px",
          },
        },
        shrink: {
          "0%": {
            width: "221px",
          },
          "100%": {
            width: "0px",
          },
        },
      },
      animation: {
        "button-hover": "grow 0.5s ",
        "button-hover-not": "shrink 0.5s",
      },
    },
    colors: {
      "beige-bg": "#F2F0E5",
      "primary-custom": "#583D9A",
      "primary-hover": "#906EE2",
      "purple-light": "#E4DDF5",
      "purple-border": "#C8BEE1",
      "font-light": "#C8B6F6",
      white: "#ffffff",
    },
    fontSize: {
      base: ["14px", "18.2px"],
      h1: ["80px", { lineHeight: "96px", fontWeight: "700" }],
      "h1-sm": ["32px", { fontWeight: "700" }],
      h2: "48px",
      h3: ["24px", "31.2px"],
      h4: "32px",
      h5: "24px",
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
