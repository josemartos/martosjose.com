import Head from 'next/head';
import { useEffect } from 'react';

import smoothscroll from 'smoothscroll-polyfill';

// Styles
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  // window object available
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Jose Martos - Designer with front-end expertise"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
