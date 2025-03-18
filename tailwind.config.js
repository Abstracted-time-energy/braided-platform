/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
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
        animation: {
          'flow': 'flow 8s ease-in-out infinite',
          'ripple': 'ripple 3s linear infinite',
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
        },
      },
    },
    plugins: [],
  }
  