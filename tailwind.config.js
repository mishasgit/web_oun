/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono Medium for Powerline', 'serif'],
        acentica: ['ArsenicaTrial-Medium', 'sans-serif' ]
      },
      colors: {
        cream: '#F9EFDB',
        beige: '#EBD9B4',
        sage: '#9DBC98',
        teal: '#638889',
        gr: '#798080',
        dgr: '#575B5B',
        hack: '#697565'
      },
      container: {
        center: true,
        screens: {
          xl: '1440px',
        },
      },
    },
  },
  plugins: [],
}
