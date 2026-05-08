import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        'navy-lightest': '#233554',
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d8',
          lightest: '#ccd6f6',
        },
        green: '#64ffda',
      },
    },
  },
  plugins: [],
}

export default config
