import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-roboto)',
    },
    extend: {
      maxWidth: {
        product: 'calc(100vw - ((100vw - 1180px) / 2))',
      },
      height: {
        image: 'calc(656px - 8px)',
      },
      colors: {
        principal: '#00875F',
        light: '#00B37E',
        background: '#121214',
        elements: '#202024',
        text: '#C4C4CC',
        title: '#E1E1E6',
      },
    },
  },
  plugins: [],
}
export default config
