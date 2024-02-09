import React, {
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement
} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';
import BgDefault from './BgDefault';
import ThemePalette from './ThemePalette';
import brand from '../../public/text/brand';
import lngDetector from '~/lib/languageDetector';
import appTheme from '../../theme/unisexMui';

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

const useStyles = makeStyles({ uniqId: 'unisex' })(theme => ({
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  hide: {
    opacity: 0
  }
}));

function Unisex(props) {
  const { children } = props;
  const { classes } = useStyles();

  const curLang = lngDetector.detect();

  const [direction, changeDir] = useState('ltr');
  const [color, changeColor] = useState('uni');
  const [themeMode, changeMode] = useState('dark');
  const [theme, setTheme] = useState({
    direction: 'ltr',
    ...appTheme('uni', 'dark'),
  });

  useEffect(() => {
    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', curLang);

    // Set color mode and direction
    if (themeType === 'light' || curLang === 'ar') {
      setTheme({
        ...appTheme(color, themeType || themeMode),
        direction: themeDir
      });
    }
  }, []);

  const toggleDarkTheme = () => {
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    changeMode(themeMode === 'light' ? 'dark' : 'light');
    setTheme({
      direction,
      ...appTheme(color, themeMode === 'light' ? 'dark' : 'light')
    });
  };

  const toggleDirection = dir => {
    setTimeout(() => {
      document.dir = dir;
    }, 200);
    changeDir(dir);
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const handleChangeColor = selectedColor => {
    changeColor(selectedColor);
    setTheme({
      direction,
      ...appTheme(selectedColor, themeMode)
    });
  };

  const muiTheme = createTheme(theme);

  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onToggleDark: toggleDarkTheme, onToggleDir: toggleDirection });
    }
    return child;
  });

  return (
    <div>
      <Head>
        <title>
          Iluxi Portfolio and Online CV
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
          <div className={classes.mainWrap}>
            <BgDefault>
              {childrenWithProps}
            </BgDefault>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

Unisex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Unisex;
