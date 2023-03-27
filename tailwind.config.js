/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        neuton: ["Neuton", "serif"],
      },
      backgroundImage: {
        bg1: "url('/assets/bg1.webp')",
        bg2: "url('/assets/bg2.webp')",
        bgMe: "url('/assets/bgMe.webp')",
        bgFooter: "url('/assets/footer/ft9.png')",
      },
      colors: {
        primary: "#5651e5",
        secondary: "#0f172a",
        light: "#f8fafc",
        danger: "#ef4444",
      },
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        shake: {
          "25%": { translate: "6px" },
          "50%": { translate: "-6px" },
          "75%": { translate: "6px" },
        },
        tekan: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.5)" },
        },
        wave1: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 51%, 3% 50%, 7% 48%, 10% 46%, 14% 45%, 17% 44%, 21% 43%, 25% 43%, 28% 44%, 31% 47%, 34% 50%, 37% 52%, 40% 55%, 43% 56%, 48% 57%, 52% 56%, 56% 54%, 59% 52%, 62% 49%, 65% 46%, 69% 44%, 73% 43%, 77% 44%, 81% 45%, 84% 47%, 87% 49%, 91% 50%, 94% 50%, 98% 49%, 100% 48%, 100% 100%, 0 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 51%, 4% 52%, 8% 53%, 12% 55%, 14% 57%, 17% 59%, 20% 61%, 23% 62%, 28% 63%, 30% 63%, 33% 63%, 36% 61%, 39% 57%, 43% 52%, 47% 48%, 51% 43%, 56% 41%, 60% 42%, 64% 44%, 68% 48%, 71% 50%, 76% 50%, 79% 51%, 81% 51%, 85% 53%, 89% 55%, 94% 54%, 96% 53%, 98% 51%, 100% 48%, 100% 100%, 0 100%)",
          },
        },
        wave2: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 51%, 3% 52%, 6% 52%, 10% 52%, 14% 52%, 17% 52%, 21% 52%, 24% 53%, 28% 54%, 31% 57%, 32% 59%, 36% 61%, 40% 60%, 44% 56%, 48% 54%, 52% 54%, 55% 54%, 59% 55%, 64% 54%, 68% 53%, 71% 51%, 76% 50%, 79% 51%, 81% 51%, 85% 53%, 88% 54%, 91% 54%, 94% 54%, 98% 51%, 100% 51%, 100% 100%, 0 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 51%, 2% 53%, 5% 55%, 8% 56%, 13% 56%, 16% 56%, 20% 56%, 22% 55%, 26% 55%, 30% 54%, 34% 53%, 36% 50%, 41% 49%, 45% 47%, 48% 45%, 51% 45%, 54% 44%, 59% 43%, 63% 44%, 67% 46%, 70% 46%, 74% 47%, 77% 48%, 81% 51%, 85% 53%, 88% 54%, 91% 54%, 94% 54%, 98% 51%, 100% 51%, 100% 100%, 0 100%)",
          },
        },
        wave3: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 51%, 4% 51%, 7% 50%, 10% 48%, 13% 47%, 16% 46%, 20% 44%, 24% 43%, 27% 43%, 30% 45%, 33% 46%, 35% 47%, 37% 48%, 40% 49%, 44% 51%, 49% 53%, 53% 55%, 56% 55%, 60% 55%, 63% 55%, 66% 53%, 70% 50%, 74% 49%, 78% 49%, 82% 49%, 85% 50%, 88% 51%, 91% 52%, 95% 51%, 100% 51%, 100% 100%, 0 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 51%, 4% 53%, 6% 53%, 10% 52%, 13% 51%, 17% 50%, 20% 48%, 22% 47%, 25% 46%, 30% 45%, 33% 46%, 35% 47%, 37% 48%, 41% 49%, 45% 48%, 50% 46%, 54% 44%, 57% 43%, 61% 44%, 64% 45%, 67% 47%, 70% 48%, 74% 49%, 78% 49%, 82% 49%, 86% 48%, 89% 45%, 93% 45%, 97% 48%, 100% 51%, 100% 100%, 0 100%)",
          },
        },
        goyang: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        terbang: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        typing: "typing 4s steps(20, end) infinite",
        spinSlow: "spin 10s linear infinite",
        blink: "blink 0.3s linear infinite",
        blinkStar1: "blink 0.2s linear infinite",
        blinkStar2: "blink 0.4s  ease-in-out infinite",
        blinkStar3: "blink 0.7s ease-in-out infinite",
        shakeInvalid: "shake 1s ease-in-out infinite",
        click: "tekan 0.2s ease-in-out",
        water1: "wave1 2s ease-in-out infinite",
        water2: "wave2 3s ease-in-out infinite",
        water3: "wave3 4s ease-in-out infinite",
        wiggle: "goyang 1s ease-in-out infinite",
        fly: "terbang 3s ease-in-out infinite",
        milkyWay1: "spin 30s linear infinite",
        milkyWay2: "spin 100s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".inset-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".tilt-card": {
          transformStyle: "preserve-3d",
        },
        ".tilt-foto": {
          position: "absolute",
          transform: "translateZ(100px)",
        },
        ".tilt-text": {
          position: "absolute",
          transform: "translateZ(50px)",
        },
        ".tilt-bgft1": {
          transform: "translateZ(100px)",
        },
        ".tilt-bgft2": {
          transform: "translateZ(80px)",
        },
        ".tilt-bgft3": {
          transform: "translateZ(60px)",
        },
        ".tilt-bgft4": {
          transform: "translateZ(50px)",
        },
        ".tilt-bgft5": {
          transform: "translateZ(40px)",
        },
        ".tilt-bgft6": {
          transform: "translateZ(20px)",
        },
        ".tilt-bgft7": {
          transform: "translateZ(10px)",
        },
        ".tilt-bgft8": {
          transform: "translateZ(2px)",
        },
        ".bg-404": {
          background: "radial-gradient(at 50% -20%, #5651e5, #0f172a) fixed",
        },
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' opacity='50' viewBox='0 0 35 35' stroke-width='2' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' /%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "3px",
        },
        ".bg-alien": {
          backgroundImage: `url("https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/null/external-spaceship-transport-smashingstocks-flat-smashing-stocks.png")`,
          backgroundRepeat: "no-repeat",
        },
        ".bg-coffe": {
          backgroundImage: `url("https://img.icons8.com/external-itim2101-fill-itim2101/64/5651e5/external-coffee-cafe-itim2101-fill-itim2101-4.png")`,
          backgroundRepeat: "no-repeat",
        },
        ".text-shadow-primary": {
          textShadow: "-3px 3px 7px rgba(86,81,229,0.77)",
        },
        ".text-shadow-secondary": {
          textShadow: "-3px 3px 7px rgba(0,0,0,0.69)",
        },
        ".text-shadow-light": {
          textShadow: "-3px 3px 7px rgba(255,255,255,0.69)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
