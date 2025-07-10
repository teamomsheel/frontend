/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary':'#FF76CE',
        'secondary':'#59D5E0',
        'third':'#F5EA5A',
         'fontcolor':'#FF52A2',
         'theme1':'#6366F1',
         'theme2':'#334155'
        
      },
      container:
      {
        center:true,
        padding:
        {
          default:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem'
        }
      }
    },
  },
  plugins: [],
}

