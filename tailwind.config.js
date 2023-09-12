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
        bgImgHome: "url('/images/backgroundHome@2x.png')",
        bgSideShop: "url('/images/BgSideShop.png')",
        bgImgMage: "url('/images/backgroundMage.png')",
        bgImgDemon: "url('/images/backgroundDemon.png')",
        bgImgDruid: "url('/images/backgroundDruid.png')",
        bgImgHunters: "url('/images/backgroundHunters.png')",
        bgImgPaladin: "url('/images/backgroundPaladin.png')",
        bgImgPriest: "url('/images/backgroundPriest.png')",
        bgImgRouge: "url('/images/backgroundRouge.png')",
        bgImgShaman: "url('/images/backgroundShaman.png')",
        bgImgWarlock: "url('/images/backgroundWarlock.png')",
        bgImgWarrior: "url('/images/backgroundWarrior.png')",
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
        'bgColor-Card': '#bea27f',
        'ColorBorder-Card': '#7a5b35',
        'Color-FilterMobile': 'rgba(67, 51, 30, 0.96)',
        button_bg: '#405384',
      },
      backgroundPosition: {
        'center-custom': '50% 50%',
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
