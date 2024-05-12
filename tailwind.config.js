/** @type {import('tailwindcss').Config} */
export default
{
  darkMode: ['selector', '[theme="dark"]'],
  content:
  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
  {
    extend:
    {
      fontFamily:
      {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:
      {
        global:
        {
          danger: '#A00F12',
          warning: '#FFA500',
        },
        light:
        {
          
        },
        dark:
        {

        },
      }
    },
  },
  plugins: [],
}
