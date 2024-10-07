/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4F46E5',
          secondary: '#FBBF24',
          accent: '#F87171', 
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          'base-200': '#F9FAFB',
          'base-300': '#E5E7EB',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#A5B4FC',
          secondary: '#FBBF24',
          accent: '#F87171',
          neutral: '#3D4451',
          'base-100': '#1F2937',
          'base-200': '#111827',
          'base-300': '#0F172A',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
