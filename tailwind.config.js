/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Varsayılan sans-serif fontunu Inter yapıyoruz
      },
      colors: {
        primary: {
          light: '#FFFFFF', // Aydınlık tema arka plan
          dark: '#1A1A1A',  // Karanlık tema arka plan
        },
        secondary: {
          light: '#F5F5F5', // Aydınlık tema için kart arka planı
          dark: '#2A2A2A',  // Karanlık tema için kart arka planı
        },
        textPrimary: {
          light: '#333333', // Aydınlık tema yazı rengi
          dark: '#E5E5E5',  // Karanlık tema yazı rengi
        },
        accent: '#007BFF',  // Vurgu rengi
        success: '#28A745', // Başarı durumu rengi
        danger: '#DC3545',  // Hata durumu rengi
        warning: '#FFC107', // Uyarı durumu rengi
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

