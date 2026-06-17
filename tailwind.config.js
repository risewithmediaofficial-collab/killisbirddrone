/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#FFF4E8',
          100: '#FFE8CC',
          200: '#FFD1A3',
          300: '#FFB066',
          400: '#FF8C33',
          500: '#F97316',
          600: '#FF6A00',
          700: '#CC5500',
          800: '#993F00',
          900: '#662A00',
        },
        black: '#111111',
        dark: '#262626',
        muted: '#6B7280',
        border: '#E5E7EB',
        offwhite: '#FAFAFA',
        skyroot: {
          DEFAULT: '#f97316', // brand orange
          dark: '#ea580c',    // orange-600
          light: '#fdba74',   // orange-300
        },
        navy: {
          50:  '#fff7ed', // orange-50
          100: '#ffedd5', // orange-100
          200: '#fed7aa', // orange-200
          300: '#fdba74', // orange-300
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        heading: ['"Manrope"', 'sans-serif'],
        sans:    ['"Lato"', 'sans-serif'],
      },
      fontSize: {
        'display':  ['clamp(3.5rem, 7vw, 6rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h1':       ['clamp(2.8rem, 5.5vw, 4.5rem)',{ lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h2':       ['clamp(2rem, 4vw, 3.2rem)',     { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'h3':       ['clamp(1.5rem, 2.5vw, 2rem)',   { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h4':       ['clamp(1.1rem, 1.5vw, 1.35rem)',{ lineHeight: '1.3' }],
        'body-lg':  ['1.0625rem', { lineHeight: '1.8' }],
        'body':     ['0.9375rem', { lineHeight: '1.75' }],
        'small':    ['0.8125rem', { lineHeight: '1.6' }],
        'eyebrow':  ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
      spacing: {
        'section':     'clamp(80px, 10vw, 140px)',
        'section-sm':  'clamp(60px, 8vw, 100px)',
      },
      maxWidth: {
        'content': '1280px',
        'wide':    '1440px',
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'soft':    '0 2px 20px rgba(0,0,0,0.06)',
        'card':    '0 4px 24px rgba(0,0,0,0.08)',
        'lift':    '0 12px 40px rgba(0,0,0,0.12)',
        'orange':  '0 8px 30px rgba(249,115,22,0.35)',
        'btn':     '0 4px 16px rgba(249,115,22,0.3)',
      },
    },
  },
  plugins: [],
}
