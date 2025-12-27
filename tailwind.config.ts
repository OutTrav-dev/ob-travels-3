const config  = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--speed) linear infinite",
        "marquee-reverse": "marquee var(--speed) linear infinite reverse",
      },
      screens: {
        between1300_1540: { min: "1300px", max: "1540px" },
      },
    },
  },
  daisyui: {
    themes: [
      {
        outbound: {
          primary: "#052210",
          secondary: "#c5f8a8",
          accent: "#0a3a1a",
          neutral: "#1c1c1c",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
export default config;
