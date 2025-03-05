/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
}

