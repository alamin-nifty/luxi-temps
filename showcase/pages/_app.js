import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import App from 'next/app';
import PropTypes from 'prop-types';
import { appWithTranslation } from 'next-i18next';
// MUI react emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
/* import css vendors */
import 'dandelion-animated-slider/build/horizontal.css';
import 'react-18-image-lightbox/style.css';
import 'animate.css/animate.css';
import '../vendors/animate-slider.css';
import '../vendors/animate-slider-extends.css';
import '../vendors/hamburger-menu.css';
import '../vendors/top-loading-bar.css';
import '../vendors/animate-extends.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';
import '../vendors/button-reset.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  const { Component, pageProps, router } = props; // eslint-disable-line

  return (
    <CacheProvider value={cacheLTR}>
      <LoadingBar
        height={0}
        color="#ffffff"
        progress={loading}
        className="top-loading-bar"
      />
      <div id="main-wrap">
        <Component
          {...pageProps}
          key={router.route}
          mode={themeType}
        />
      </div>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
