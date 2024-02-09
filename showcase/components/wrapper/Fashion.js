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
import Header from '../fashion/Header';
import Footer from '../fashion/Footer';
import PageNav from '../fashion/PageNav';
import Notification from '../fashion/Notification';
// Showcase Setup
import ThemePalette from './ThemePalette';
import BgDefault from './BgDefault';
import lngDetector from '~/lib/languageDetector';
import appTheme from '../../theme/fashionMui';

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

const useStyles = makeStyles({ uniqId: 'fashion' })(theme => ({
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  hide: {
    opacity: 0
  }
}));

function Fashion(props) {
  const { classes } = useStyles();
  const { children, pageName, isFull, invertHeader } = props;

  const [direction, changeDir] = useState('ltr');
  const [themeMode, changeMode] = useState('light');
  const [color, changeColor] = useState('grayscale');
  const curLang = lngDetector.detect();

  const [theme, changeTheme] = useState({
    direction: 'ltr',
    ...appTheme('grayscale', 'light')
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
          {brand.fashion.name + ' - ' + pageName}
        </title>
      </Head>
      <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <ThemePalette
            changeColor={handleChangeColor}
            changeDir={toggleDirection}
            changeMode={toggleDarkTheme}
            isDark={themeMode}
            isRtl={direction}
            selectedColor={color}
          />
          <BgDefault>
            {isFull && (
              <Fragment>
                <Header
                  onToggleDark={toggleDarkTheme}
                  onToggleDir={toggleDirection}
                  invert={invertHeader}
                />
              </Fragment>
            )}
            <Fragment>
              {children}
            </Fragment>
            {isFull && (
              <Fragment>
                <Hidden mdDown>
                  <PageNav />
                </Hidden>
                <Hidden mdDown>
                  <Notification />
                </Hidden>
              </Fragment>
            )}
          </BgDefault>
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}

Fashion.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
  isFull: PropTypes.bool,
  invertHeader: PropTypes.bool,
};

Fashion.defaultProps = {
  pageName: 'Landing Page',
  isFull: true,
  invertHeader: false
};

export default Fashion;
