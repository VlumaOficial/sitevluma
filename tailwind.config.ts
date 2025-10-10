import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'verde-inteligente': '#059669',
        'laranja-energia': '#EA580C',
        'fundo-escuro': '#0A0E27',
        'branco-suave': '#F8FAFC',
        'branco-puro': '#FFFFFF',
        'purple-vivid': '#8B5CF6',
        'blue-vivid': '#3B82F6',
        'cyan-vivid': '#06B6D4',
        'pink-vivid': '#EC4899',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
