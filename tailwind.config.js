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
      animation:
      {
        'spin-slow': 'spin 10s linear infinite',
      },
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
          background: '#031927',
          primary: '#001D3D',
          secondary: '#FFD60A',
          text: '#F8EDEB',
          accent: '#4D6CFA'
        },
      }
    },
  },
  plugins: [],
}
