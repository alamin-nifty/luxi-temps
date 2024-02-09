import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import VideoBanner from '../../../components/agency/VideoBanner';
import SquareParallax from '../../../components/agency/Parallax/Square';
import About from '../../../components/agency/About';
import Services from '../../../components/agency/Services';
import Testimonials from '../../../components/agency/Testimonials';
import Expertise from '../../../components/agency/Expertise';
import CaseStudies from '../../../components/agency/CaseStudies';
import CallAction from '../../../components/agency/CallAction';
import MapAddress from '../../../components/agency/MapAddress';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  containerWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Agency pageName="Home Page">
      <main className={classes.containerWrap}>
        <SquareParallax />
        <section>
          <VideoBanner />
        </section>
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="about">
          <About />
        </section>
        <section className={classes.spaceTop} id="services">
          <Services />
        </section>
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="our-expertise">
          <Expertise />
        </section>
        <section className={isMobile ? classes.spaceTopShort : classes.spaceTop} id="testimonials">
          <Testimonials />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section className={classes.spaceTopShort} id="call-to-action">
          <CallAction />
        </section>
        <section className={classes.spaceTopShort} id="address">
          <MapAddress />
        </section>
      </main>
    </Agency>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
