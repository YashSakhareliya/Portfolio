/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        'web3': {
          blue: {
            DEFAULT: '#3B82F6',
            dark: '#1E40AF',
            light: '#93C5FD',
            glow: '#60A5FA',
          },
          purple: {
            DEFAULT: '#8B5CF6',
            dark: '#5B21B6',
            light: '#C4B5FD',
            glow: '#A78BFA',
          },
          teal: {
            DEFAULT: '#14B8A6',
            dark: '#0F766E',
            light: '#5EEAD4',
            glow: '#2DD4BF',
          },
          pink: {
            DEFAULT: '#EC4899',
            dark: '#BE185D',
            light: '#F9A8D4',
            glow: '#F472B6',
          },
          amber: {
            DEFAULT: '#F59E0B',
            dark: '#B45309',
            light: '#FCD34D',
            glow: '#FBBF24',
          },
        },
        // Dark mode specific colors
        dark: {
          bg: {
            primary: '#0F172A',
            secondary: '#1E293B',
            tertiary: '#334155',
          },
          accent: {
            primary: '#3B82F6',
            secondary: '#8B5CF6',
            tertiary: '#14B8A6',
          },
        },
      },

      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom right, #0F172A, #1E1B4B)',
        'dark-radial': 'radial-gradient(circle at center, #1E293B, #0F172A)',
        'web3-gradient': 'linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899)',
      },
      boxShadow: {
        'web3': '0 0 15px rgba(59, 130, 246, 0.5)',
        'web3-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
        'web3-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'web3-teal': '0 0 15px rgba(20, 184, 166, 0.5)',
      },
      
    },
  },
  plugins: [],
}

