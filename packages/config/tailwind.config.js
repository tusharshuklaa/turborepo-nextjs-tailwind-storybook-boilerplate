/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '480px',
        tablet: '768px',
        desktop: '976px',
        'desktop-wide': '1440px',
      },
      textColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-text-base'),
        heading: withOpacity('--color-text-heading'),
        article: withOpacity('--color-text-article'),
        button: withOpacity('--color-text-button'),
      },
      backgroundColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-background'),
        fill: withOpacity('--color-fill'),
        button: withOpacity('--color-bg-button'),
        'button-hover': withOpacity('--color-bg-button-hover'),
        tab: withOpacity('--color-bg-tab'),
        'tab-hover': withOpacity('--color-bg-tab-hover'),
        border: withOpacity('--color-edge'),
      },
      gradientColorStops: {
        hue: 'var(--color-fill)',
      },
      borderColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-fill'),
      },
      outlineColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-fill'),
      },
      minHeight: {
        half: '50%',
        'half-screen': '50vh',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
