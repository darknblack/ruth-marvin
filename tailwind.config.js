/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'romantic': ['Great Vibes', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'elegant': ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      colors: {
        khaki: {
          50: '#faf9f6',
          100: '#f5f2ed',
          200: '#e8e3d8',
          300: '#d4cbb8',
          400: '#b8aa94',
          500: '#9d8a6f',
          600: '#7a6b56',
          700: '#6b5f52',  // Softer dark - good for body text
          800: '#5d5142',
          900: '#3f372e',
        },
        rose: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d3d3',
          300: '#f5b5b5',
          400: '#ee8f8f',
          500: '#e37171',
          600: '#d15151',
          700: '#b03f3f',
          800: '#913737',
          900: '#783434',
        },
        blush: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fbdde2',
          300: '#f7c4cd',
          400: '#f1a1b0',
          500: '#e87d93',
          600: '#d65a7a',
          700: '#b84464',
          800: '#993c55',
          900: '#7f374a',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf9ee',
          200: '#faf1d3',
          300: '#f6e5b0',
          400: '#f0d484',
          500: '#e8bf5a',
          600: '#d9a541',
          700: '#b8852f',
          800: '#966a29',
          900: '#7a5727',
        },
        // Invitation-specific soft palette for text and accents
        invitation: {
          text: '#6b5f52',      // Soft brown-gray for body text (same as khaki-700)
          textLight: '#8a7d6e', // Lighter for secondary text
          textMuted: '#a69b8f', // Very muted for subtle text
          cream: '#faf8f4',
          beige: '#f5f1ea',
          sage: '#d4d9c8',
          rose: '#e8d4d0',
          taupe: '#8a7d6e',
          brown: '#6b5f52',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

