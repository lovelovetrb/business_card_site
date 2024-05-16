/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    clipPath: {
      left: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
      right: "polygon(0 0,100% 10%,100% 90%,0 100%)",
    },
    extend: {},
  },
  plugins: ["tailwind-clip-path"],
}





