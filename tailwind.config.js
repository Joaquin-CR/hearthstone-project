/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImgHome: "url('/images/backgroundHome.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bgColor-Blue': '#2c3858',
        'bgColor-mobileMenu': '#313f63',
        'Color-MenuHover': '#fcd52d',
        darkOpacity: 'rgba(44, 56, 88, 0.75)',
        'colorText-Sadows': '#00d1ff',
        gold: '#fcd52d',
        gold_2: '#c09c31',
        gold_3: '#fdd941',
        'bgColor-Filters': '#594059',
        bgOptions: '#3b2203',
        ColorGold: '#ffe792',
        'bgColor-CardDescroption': '#3c2203',
      },
      screens: {
        widescreen: { raw: '(min-aspect-ratio: 3/2)' },
        tallscreen: { raw: '(min-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      fontFamily: {
        AclonicaR: ['Aclonica'],
        MonserratM: ['Monserrat'],
      },
    },
  },
  plugins: [],
};
