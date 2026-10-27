/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff87',
          mint: '#10b981',
          cyan: '#00f0ff',
          blue: '#38bdf8',
          yellow: '#ffde59',
          gold: '#f59e0b',
          pink: '#ff0077',
          crimson: '#ff0055',
          purple: '#8b5cf6',
        },
        cyber: {
          950: '#03060f',
          900: '#070d1e',
          850: '#0c142b',
          800: '#111c3a',
          700: '#1b2a52',
        },
        stadium: {
          950: '#040711',
          900: '#080f21',
          850: '#0e1730',
          800: '#142144',
          700: '#1d2f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'system-ui', 'sans-serif'],
        athletic: ['Montserrat', 'Inter', 'sans-serif'],
      },
      animation: {
        'laser-scan': 'laserScan 8s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spinReverse 25s linear infinite',
        'shimmer-fast': 'shimmerFast 3s linear infinite',
        'float-dynamic': 'floatDynamic 4s ease-in-out infinite',
      },
      keyframes: {
        laserScan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '15%': { opacity: '0.8' },
          '85%': { opacity: '0.8' },
          '100%': { transform: 'translateY(1000%)', opacity: '0' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(0,255,135,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(0,255,135,0.8))' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        shimmerFast: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatDynamic: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
