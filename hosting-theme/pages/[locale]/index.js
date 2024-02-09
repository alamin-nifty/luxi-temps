import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Promotion from '~/components/Promotion';
import Feature from '~/components/Feature';
import Benefit from '~/components/Benefit';
import PricingPlan from '~/components/PricingPlan';
import ParticlesCanvas from '~/components/ParticlesCanvas';
import Testimonials from '~/components/Testimonials';
import FooterWithCounter from '~/components/Footer/FooterWithCounter';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20)
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.hosting.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
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
          <section id="footer" className={classes.spaceTop}>
            <FooterWithCounter toggleDir={onToggleDir} />
          </section>
          {!isTablet && (
            <Notification />
          )}
        </main>
        {!isTablet && (
          <PageNav />
        )}
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
