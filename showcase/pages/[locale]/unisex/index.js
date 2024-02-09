import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Header from '../../../components/Unisex/Header';
import BannerNav from '../../../components/Unisex/BannerNav';
import About from '../../../components/Unisex/About';
import Timeline from '../../../components/Unisex/Timeline';
import Counter from '../../../components/Unisex/Counter';
import Services from '../../../components/Unisex/Services';
import Gallery from '../../../components/Unisex/Gallery';
import Testimonials from '../../../components/Unisex/Testimonials';
import Blog from '../../../components/Unisex/Blog';
import Footer from '../../../components/Unisex/Footer';
import PageNav from '../../../components/Unisex/PageNav';
import Decoration from '../../../components/Unisex/Parallax/Decoration';
import Notification from '../../../components/Unisex/Notification';
import brand from '../../../public/text/brand';
import Unisex from '../../../components/wrapper/Unisex';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.dark : theme.palette.background.paper,
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3)
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
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function UnisexLanding(props) {
  const { classes, cx } = useStyles();
  return (
    <Fragment>
      <Unisex>
        <section id="home" />
        <Header />
        <BannerNav />
        <section id="about">
          <About />
          <Timeline />
          <Counter />
        </section>
        <div className={classes.greyBg}>
          <div className={classes.parallaxWrap}>
            <Decoration />
            <section id="services">
              <Services />
            </section>
            <section id="my-work" className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
              <Gallery />
            </section>
          </div>
          <section id="testimonials">
            <Testimonials />
          </section>
          <div className={classes.parallaxWrap}>
            <div className={classes.bottomDeco}>
              <Decoration />
            </div>
            <section id="blog" className={classes.spaceTopShort}>
              <Blog />
            </section>
            <section id="contact" className={classes.spaceTop}>
              <Footer />
            </section>
          </div>
        </div>
        <div>
          <Hidden mdDown>
            <Notification />
          </Hidden>
          <Hidden smDown>
            <PageNav />
          </Hidden>
        </div>
      </Unisex>
    </Fragment>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default UnisexLanding;
