import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ["fem-fluid-h1"]: "clamp(2.75rem, 1.878vw + 2.31rem, 4rem)",
        ["fem-fluid-h2"]: "clamp(2rem, 0.751vw + 1.824rem, 2.5rem)",
        ["fem-fluid-overline"]: "",
        ["fem-fluid-body"]: "clamp(1rem, 0.188vw + 0.956rem, 1.125rem)",
      },
      lineHeight: {
        ["fem-fluid-body"]: "clamp(1.624rem, -0.001vw + 1.625rem, 1.625rem)",
      },
      colors: {
        ["fem-blue-munsell"]: "#4D96A9",
        ["fem-non-photo-blue"]: "#8FE3F9",
        ["fem-royal-purple"]: "#855FB1",
        ["fem-mauve"]: "#D9B8FF",
        ["fem-space-cadet"]: "#28283D",
        ["fem-seasalt"]: "#FAFAFA",
        ["fem-cool-gray"]: "#87879D",
      },
    },
  },
  plugins: [],
};
export default config;
