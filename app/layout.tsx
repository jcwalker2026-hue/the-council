import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athena's Council",
  description: "Choose your world. Enter the council.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=IM+Fell+English+SC&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#020810', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
