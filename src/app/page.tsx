import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Consultoria from '../components/Consultoria';
import Nosotros from '../components/Nosotros';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  // Cargar imágenes del servidor en tiempo de ejecución
  const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
  const filenames = fs.readdirSync(imagesDirectory);
  const galleryImages = filenames
    .filter((filename) => /\.(jpg|jpeg)$/i.test(filename)) // Filtrar solo archivos JPG y JPEG
    .map((filename) => `/images/gallery/${filename}`);

  return (
    <>
      <Head>
        <title>ALM Tecnología</title>
        <meta name="ALM" content="empresa de tecnología y metalmecánica" />
        {/* Aquí cambiamos la ruta del ícono */}
        <link rel="icon" href="/ico-logo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>
        <Presentacion />
        <Consultoria />
        <Nosotros />
        <Gallery images={galleryImages} />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
