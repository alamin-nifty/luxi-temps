import React, { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import VideoBanner from '../../../components/fashion/VideoBanner';
import Promotions from '../../../components/fashion/Promotions';
import NewProducts from '../../../components/fashion/NewProducts';
import Trending from '../../../components/fashion/Trending';
import Categories from '../../../components/fashion/Categories';
import FeaturedProducts from '../../../components/fashion/FeaturedProducts';
import Testimonials from '../../../components/fashion/Testimonials';
import Blog from '../../../components/fashion/Blog';
import Feature from '../../../components/fashion/Feature';
import Footer from '../../../components/fashion/Footer';
// Theme Wrapper
import Fashion from '../../../components/wrapper/Fashion';

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

function Landing() {
  const { classes } = useStyles();

  return (
    <Fashion pageName="Home Page">
      <Fragment>
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
      </Fragment>
    </Fashion>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
