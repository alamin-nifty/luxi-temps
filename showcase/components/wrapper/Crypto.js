import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import brand from '../../public/text/brand';
// General Component
import Header from '../crypto/Header';
import FooterWithCounter from '../crypto/Footer/FooterWithCounter';
import PageNav from '../crypto/PageNav';
import Notification from '../crypto/Notification';
import GradientDeco from '../crypto/GradientDeco';
// Showcase Setup
import ThemePalette from './ThemePalette';
import BgDefault from './BgDefault';
import lngDetector from '~/lib/languageDetector';
import appTheme from '../../theme/cryptoMui';

let themeType = '';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme');
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true,
});

const useStyles = makeStyles({ uniqId: 'crypto' })(theme => ({
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  hide: {
    opacity: 0
  }
}));

function Crypto(props) {
  const { classes } = useStyles();
  const { children, pageName, isFull } = props;

  const [direction, changeDir] = useState('ltr');
  const [themeMode, changeMode] = useState('light');
  const [color, changeColor] = useState('money');
  const curLang = lngDetector.detect();

  const [theme, changeTheme] = useState({
    direction: 'ltr',
    ...appTheme('money', 'light')
  });

  useEffect(() => {
    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = themeDir;
    document.documentElement.setAttribute('lang', curLang);

    // Set color mode and direction
    if (themeType === 'dark' || curLang === 'ar') {
      changeTheme({
        ...appTheme(color, themeType || themeMode),
        direction: themeDir
      });
    }
  }, []);

  const toggleDirection = dir => {
    setTimeout(() => {
      document.dir = dir;
    }, 200);
    changeDir(dir);
    changeTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const toggleDarkTheme = () => {
    localStorage.setItem('luxiTheme', themeMode === 'light' ? 'dark' : 'light');
    changeMode(themeMode === 'light' ? 'dark' : 'light');
    changeTheme({
      direction,
      ...appTheme(color, themeMode === 'light' ? 'dark' : 'light')
    });
  };

  const handleChangeColor = selectedColor => {
    changeColor(selectedColor);
    changeTheme({
      direction,
      ...appTheme(selectedColor, themeMode)
    });
  };

  const muiTheme = createTheme(theme);

  return (
    <Fragment>
      <Head>
        <title>
          {brand.crypto.name + ' - ' + pageName}
        </title>
      </Head>
      <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GradientDeco />
          <ThemePalette
            changeColor={handleChangeColor}
            changeDir={toggleDirection}
            changeMode={toggleDarkTheme}
            isDark={themeMode}
            isRtl={direction}
            selectedColor={color}
          />
          <div id="home" className="invisible">Home</div>
          <BgDefault>
            {isFull && (
              <Header
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
              />
            )}
            <Fragment>
              {children}
            </Fragment>
            {isFull && (
              <Fragment>
                <FooterWithCounter toggleDir={toggleDirection} />
                <Hidden mdDown>
                  <Notification />
                </Hidden>
                <Hidden mdDown>
                  <PageNav />
                </Hidden>
              </Fragment>
            )}
          </BgDefault>
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}

Crypto.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
  isFull: PropTypes.bool
};

Crypto.defaultProps = {
  pageName: 'Landing Page',
  isFull: true
};

export default Crypto;
