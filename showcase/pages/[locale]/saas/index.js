import React from 'react';
import { makeStyles } from 'tss-react/mui';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Banner from '../../../components/saas/Banner';
import CompanyLogo from '../../../components/saas/CompanyLogo';
import Counter from '../../../components/saas/Counter';
import Feature from '../../../components/saas/Feature';
import Testimonials from '../../../components/saas/Testimonials';
import PricingPlan from '../../../components/saas/PricingPlan';
import Faq from '../../../components/saas/Faq';
import NewsEvent from '../../../components/saas/NewsEvent';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceBottomTesti: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(20),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const { classes, cx } = useStyles();
  return (
    <Saas pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <Banner />
        </section>
        <div>
          <CompanyLogo />
        </div>
        <section className={classes.spaceTopShort}>
          <Counter />
        </section>
        <div id="feature" className={classes.spaceTop}>
          <Feature />
        </div>
        <section id="testimonials" className={classes.spaceBottomTesti}>
          <Testimonials />
        </section>
        <section id="pricing" className={classes.spaceTop}>
          <PricingPlan />
        </section>
        <section id="faq" className={classes.spaceTopShort}>
          <Faq />
        </section>
        <div className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
          <NewsEvent />
        </div>
      </main>
    </Saas>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
