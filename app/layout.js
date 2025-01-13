import "./globals.css";
import localFont from "next/font/local";

const graffitiDripesRegular = localFont({
  src: "../public/assets/fonts/GraffitiDripes-Regular.otf",
  variable: "--font-graffiti-regular",
});

const graffitiDripsShadow = localFont({
  src: "../public/assets/fonts/GraffitiDripes-ShadowDrips.otf",
  variable: "--font-graffiti-shadow",
});

const outfit = localFont({
  src: "../public/assets/fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.ico" sizes="any" />
        <title>Mangamania</title>
      </head>
      <body
        className={`${graffitiDripesRegular.variable} ${graffitiDripsShadow.variable} ${outfit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
