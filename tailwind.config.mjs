/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "769px",
        sm: "641px",
      },
      fontFamily: {
        "body-primary": "var(--body-primary-font-family)",
        queens: "var(--queens)",
      },
      backgroundColor: {
        "site-background": "#f0e9e0",
        "primary-btn": "#b49e64",
        "primary-btn-hover": "#c6af73",
      },
      colors: {
        primary: "#000000",
        secondary: "#f0e9e0",
        "link-primary": "#585756",
        "link-secondary": "#f0e9e0",
        headingLargeColor: "hsla(0, 0%, 0%, .59)",
        paragraphMediumColor: "hsla(0, 0%, 0%, .59)",
      },
      
      margin: {
        "section-gap": "8.8vw",
        headerHeight: "var(--headerHeight)",
        footerHeight: "272px"
      },
      padding: {
        "section-gap": "3.3vmax",
      },
    },
  },
  plugins: [],
};
