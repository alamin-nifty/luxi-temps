import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Banner from '../../../components/crypto/Banner';
import Promotion from '../../../components/crypto/Promotion';
import Feature from '../../../components/crypto/Feature';
import Benefit from '../../../components/crypto/Benefit';
import Testimonials from '../../../components/crypto/Testimonials';
import Faq from '../../../components/crypto/Faq';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Crypto pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="banner">
          <Banner />
        </section>
        <section id="promotions">
          <Promotion />
        </section>
        <section id="feature" className={isTablet ? classes.spaceTopShort : ''}>
          <Feature />
        </section>
        <section id="benefit" className={classes.spaceTopShort}>
          <Benefit />
        </section>
        <section id="testimonials" className={classes.spaceTop}>
          <Testimonials />
        </section>
        <section id="faq" className={classes.spaceTop}>
          <Faq />
        </section>
      </main>
    </Crypto>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
