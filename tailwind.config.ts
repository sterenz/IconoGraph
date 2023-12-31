import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm)"],
        display: ["var(--font-playfair)"],
        mono: ["var(--font-ibm-mono)"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/hero1.jpg')",
      },
      maxWidth: {
        '1/2': '50%',
      },
      keyframes:  {
        'fadeInDown': {
          "0%":   { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        'fadeInUp': {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-in-out'
      },
    },
  },
  plugins: [],
}
export default config
