import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import { useEffect } from 'react';
import { Router } from 'next/router';

function FacebookPixel() {
  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('175201925426566');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
