import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
}
export default config
