import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        'navy-lightest': '#233554',
        slate: '#8892b0',
        'slate-light': '#a8b2d8',
        'slate-lightest': '#ccd6f6',
        green: '#64ffda',
      },
    },
  },
  plugins: [],
}

export default config
