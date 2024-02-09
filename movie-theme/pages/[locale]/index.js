import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Notification from '~/components/Notification';
import Header from '~/components/Header';
import VideoBanner from '~/components/VideoBanner';
import Promotions from '~/components/Promotions';
import Featured from '~/components/Featured';
import Trending from '~/components/Trending';
import Categories from '~/components/Categories';
import AllCategories from '~/components/AllCategories';
import PricingPlan from '~/components/PricingPlan';
import Faq from '~/components/Faq';
import NewsEvent from '~/components/NewsEvent';
import FooterWithDeco from '~/components/Footer/FooterWithDeco';
import PageNav from '~/components/PageNav';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('sm')]: {
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

function Landing(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.movie.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <VideoBanner />
            <div id="promotions">
              <Promotions />
            </div>
          </section>
          <section id="featured" className={classes.spaceTop}>
            <Featured />
          </section>
          <section id="trending" className={classes.spaceTop}>
            <Trending />
          </section>
          <section id="categories" className={classes.spaceTop}>
            <Categories />
          </section>
          <section id="all" className={classes.spaceTopShort}>
            <AllCategories />
          </section>
          <section id="pricing" className={classes.spaceTop}>
            <PricingPlan />
          </section>
          <section id="faq" className={classes.spaceTop}>
            <Faq />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
        </main>
        <section id="footer" className={classes.spaceTop}>
          <FooterWithDeco toggleDir={onToggleDir} />
        </section>
        {!isTablet && (
          <Fragment>
            <PageNav />
            <Notification />
          </Fragment>
        )}
      </div>
    </Fragment>
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
