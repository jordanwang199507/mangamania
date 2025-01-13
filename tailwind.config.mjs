/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgRoot: "var(--background-root)",
        bgPrimary: "var(--background-primary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        darkPrimary: "var(--dark-primary)",
        darkSecondary: "var(--dark-secondary)",
        lightPrimary: "var(--light-primary)",
        lightSecondary: "var(--light-secondary)",
      },
      fontFamily: {
        graffitiRegular: "var(--font-graffiti-regular)",
        graffitiShadow: "var(--font-graffiti-shadow)",
        outfit: "var(--font-outfit)",
      },
      backgroundImage: {
        infoContainer: "url('/assets/svg/infoContainer.svg')",
        avatar0: "url('/assets/img/avatar00.png')",
        avatar1: "url('/assets/img/avatar01.png')",
        avatar2: "url('/assets/img/avatar02.png')",
        avatar3: "url('/assets/img/avatar03.png')",
        avatar4: "url('/assets/img/avatar04.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".containers": {
          "@apply mx-auto max-[550px]:px-2 px-5 lg:px-10 w-full xl:max-w-[120rem] max-h-[84rem] min-h-[74rem] h-screen":
            {},
        },
      });
    }),
  ],
};
