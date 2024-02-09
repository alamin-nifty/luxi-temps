import React from 'react';
import { makeStyles } from 'tss-react/mui';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Banner from '../../../components/mobile/Banner';
import Counter from '../../../components/mobile/Counter';
import Feature from '../../../components/mobile/Feature';
import Showcase from '../../../components/mobile/Showcase';
import Testimonials from '../../../components/mobile/Testimonials';
import Faq from '../../../components/mobile/Faq';
import CompanyLogo from '../../../components/mobile/CompanyLogo';
import NewsEvent from '../../../components/mobile/NewsEvent';
// Theme Wrapper
import Mobile from '../../../components/wrapper/Mobile';

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
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2),
    }
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
    <Mobile pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <Banner />
        </section>
        <section id="counter">
          <Counter />
        </section>
        <section id="feature" className={classes.spaceTop}>
          <Feature />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq" className={classes.spaceTopShort}>
          <Faq />
        </section>
        <section className={classes.spaceTopShort}>
          <CompanyLogo />
        </section>
        <section id="news" className={classes.spaceTopShort}>
          <NewsEvent />
        </section>
      </main>
    </Mobile>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
