/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'], 
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        // Brand colors
        brand: {
          primary: '#64B5BA',    // Teal
          secondary: '#C4A484',  // Tan
          text: '#2D3B4D',      // Dark blue-grey
        },
        // Section colors
        section: {
          bio: {
            light: '#E8F5E9',
            DEFAULT: '#4CAF50',
            dark: '#2E7D32',
          },
          psycho: {
            light: '#F3E5F5',
            DEFAULT: '#9C27B0',
            dark: '#6A1B9A',
          },
          social: {
            light: '#FFF3E0',
            DEFAULT: '#FF9800',
            dark: '#EF6C00',
          },
          spiritual: {
            light: '#E3F2FD',
            DEFAULT: '#2196F3',
            dark: '#1565C0',
          },
        },
        // Whirlpool layer colors
        wairua: {
          light: '#e0f5ff',
          DEFAULT: '#87CEEB',
          dark: '#5BA3D0',
        },
        mauri: {
          light: '#d1f0e0',
          DEFAULT: '#90EE90',
          dark: '#3CB371',
        },
        mind: {
          light: '#f0e0d1',
          DEFAULT: '#F5DEB3',
          dark: '#DEB887',
        },
        nervous: {
          light: '#e0d1f0',
          DEFAULT: '#D8BFD8',
          dark: '#9370DB',
        },
        body: {
          light: '#d1e0f0',
          DEFAULT: '#B0C4DE',
          dark: '#6495ED',
        },
        relationship: {
          light: '#f0d1e0',
          DEFAULT: '#FFB6C1',
          dark: '#DB7093',
        },
        community: {
          light: '#e0f0d1',
          DEFAULT: '#98FB98',
          dark: '#3CB371',
        },
        environment: {
          light: '#d1f0f0',
          DEFAULT: '#AFEEEE',
          dark: '#5F9EA0',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        'md': '1rem',
        '4.5xl': '2.5rem',
      },
      animation: {
        'flow': 'flow 8s ease-in-out infinite',
        'ripple': 'ripple 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}