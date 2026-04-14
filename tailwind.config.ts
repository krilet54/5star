import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A060', light: '#E8C87A', dark: '#A07840', muted: 'rgba(201,160,96,0.15)' },
        dark: { DEFAULT: '#080808', 2: '#111111', 3: '#191919', 4: '#222222', 5: '#2A2A2A' },
        border: { DEFAULT: '#2E2E2E', gold: 'rgba(201,160,96,0.3)' },
        ink: { DEFAULT: '#F0EAE0', muted: '#9A9080', dim: '#5A5248' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        fadeUp: 'fadeUp 0.8s ease both',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
export default config
