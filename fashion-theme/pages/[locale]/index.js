import React from 'react';
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
import NewProducts from '~/components/NewProducts';
import Trending from '~/components/Trending';
import Categories from '~/components/Categories';
import FeaturedProducts from '~/components/FeaturedProducts';
import Testimonials from '~/components/Testimonials';
import Blog from '~/components/Blog';
import Feature from '~/components/Feature';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
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
    <React.Fragment>
      <Head>
        <title>
          { brand.fashion.name + ' - Home Page' }
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
          <section id="all-new" className={classes.spaceTop}>
            <NewProducts />
          </section>
          <section id="trending" className={classes.spaceTop}>
            <Trending />
          </section>
          <section id="categories" className={classes.spaceTop}>
            <Categories />
          </section>
          <section id="featured" className={classes.spaceTopShort}>
            <FeaturedProducts />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
        </main>
        <section id="footer" className={classes.spaceTop}>
          <Footer />
        </section>
        {!isTablet && (
          <PageNav />
        )}
        <Notification />
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
