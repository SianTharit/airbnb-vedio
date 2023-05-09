import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import Navbar from '../src/components/navbar/Navbar';
import ClientOnly from '../src/components/ClientOnly';
import RegisterModal from '../src/components/modals/RegisterModal';
import ToasterProvider from '../src/providers/ToasterProvider';

const font = Nunito({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
