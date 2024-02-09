import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import HeadProps from '../../components/HeadProperties';
import Banner from '../../components/showcase/Banner';
import Explore from '../../components/showcase/Explore';
import Footer from '../../components/showcase/Footer';
import appTheme from '../../theme/mobileMui';

const useStyles = makeStyles({ uniqId: 'showcase' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  }
}));

function Showcase() {
  const { classes } = useStyles();
  const [theme] = useState({
    ...appTheme('joker', 'light')
  });
  const muiTheme = createTheme(theme);

  return (
    <Fragment>
      <Head>
        <title>
          Luxiren - React Single Landing Page Template Collection
        </title>
        <HeadProps />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div className={classes.mainWrap}>
          <Banner />
          <div id="explore">
            <Explore />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Showcase;
