import React from 'react';
import { makeStyles } from 'tss-react/mui';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Banner from '../../../components/hosting/Banner';
import Promotion from '../../../components/hosting/Promotion';
import Feature from '../../../components/hosting/Feature';
import Benefit from '../../../components/hosting/Benefit';
import PricingPlan from '../../../components/hosting/PricingPlan';
import ParticlesCanvas from '../../../components/hosting/ParticlesCanvas';
import Testimonials from '../../../components/hosting/Testimonials';
// Theme Wrapper
import Hosting from '../../../components/wrapper/Hosting';

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

  return (
    <Hosting pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="search">
          <Banner />
        </section>
        <div id="promotion">
          <Promotion />
        </div>
        <section id="feature">
          <Feature />
        </section>
        <section id="benefit">
          <Benefit />
        </section>
        <ParticlesCanvas />
        <section id="pricing" className={classes.spaceTopShort}>
          <PricingPlan />
        </section>
        <section id="testimonials" className={classes.spaceTopShort}>
          <Testimonials />
        </section>
      </main>
    </Hosting>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
