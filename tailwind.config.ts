import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#070709',
          main: '#070709',
          secondary: '#0E0E12',
          card: '#14141A',
          cardHover: '#1B1B22',
        },
        typography: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        gold: {
          100: '#FDF6E2',
          200: '#FBE9B8',
          300: '#F5D77F',
          400: '#E8BE48',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#8C6709',
          800: '#5C4406',
          900: '#332603',
        },
        accent: {
          gold: '#D4AF37',
          goldLight: '#F5D77F',
          goldDark: '#997A15',
          blue: '#648CFF',
          purple: '#A78BFA',
          glow: 'rgba(212, 175, 55, 0.2)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          gold: 'rgba(212, 175, 55, 0.35)',
          glow: 'rgba(212, 175, 55, 0.5)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'Cinzel', 'Cormorant Garamond', 'serif'],
        editorial: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(212, 175, 55, 0.4)',
        'glow-gold-lg': '0 0 50px -5px rgba(212, 175, 55, 0.55)',
        'glow-blue': '0 0 40px -10px rgba(100, 140, 255, 0.3)',
        'glow-purple': '0 0 40px -10px rgba(167, 139, 250, 0.25)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'gold-frame': '0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.08)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 60% 30%, rgba(212, 175, 55, 0.12) 0%, rgba(7, 7, 9, 0) 70%)',
        'gold-metallic': 'linear-gradient(135deg, #FFF0BD 0%, #D4AF37 50%, #997328 100%)',
        'gold-button': 'linear-gradient(135deg, #FBE082 0%, #D4AF37 50%, #B8860B 100%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.8deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
