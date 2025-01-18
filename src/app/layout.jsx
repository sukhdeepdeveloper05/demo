import Header from "@/components/Layout/Header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Layout/Footer";

const adobeGaramondPro = localFont({
  src: [
    {
      path: "../assets/Fonts/adobe-garamond-pro/AGaramondPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/Fonts/adobe-garamond-pro/AGaramondPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--body-primary-font-family",
});
const queens = localFont({
  src: [
    {
      path: "../assets/Fonts/Queens/QueensCondensedTrial-Light.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/Fonts/Queens/QueensCondensedTrial-Thin.woff",
      weight: "100",
      style: "italic",
    },
  ],
  preload: true,
  variable: "--queens",
});

export const metadata = {
  title: "House On The Clouds",
  description:
    "We at HOTC celebrate the wild ones , the rule breakers, the travellers , the new age modern couple who are not afraid to experiment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${adobeGaramondPro.variable} ${queens.variable} antialiased scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
