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
        heading: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        label: ['var(--font-label)'],
      },
      fontSize: {
        'display': ['var(--fs-display)', { lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-display)' }],
        'h1': ['var(--fs-h1)', { lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-display)' }],
        'h2': ['var(--fs-h2)', { lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--tracking-heading)' }],
        'h3': ['var(--fs-h3)', { lineHeight: '1.2', letterSpacing: 'var(--tracking-heading)' }],
        'h4': ['var(--fs-h4)', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'body-lg': ['var(--fs-body-lg)', { lineHeight: '1.75' }],
        'body': ['var(--fs-body)', { lineHeight: 'var(--lh-body)' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'eyebrow': ['var(--fs-label)', { lineHeight: '1', letterSpacing: 'var(--tracking-label)' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'micro': ['var(--fs-caption)', { lineHeight: '1.3', letterSpacing: '0.12em' }],
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
