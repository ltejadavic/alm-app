import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALM-Tecnología",
  description: "Consultoría en Tecnología y Metalmecánica",
  icons: {
    icon: "/ico-logo.ico", // Aquí especificas la ruta al nuevo ícono
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Agrega aquí los enlaces adicionales al <head> si es necesario */}
        <link rel="icon" href="/ico-logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}