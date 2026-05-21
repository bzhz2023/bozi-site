import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#F4F1EB',
        ink: {
          DEFAULT: '#1A1815',
          mid: '#635F55',
          muted: '#A09B90',
        },
        rule: '#DDD8CE',
      },
      letterSpacing: {
        label: '0.18em',
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}

export default config
