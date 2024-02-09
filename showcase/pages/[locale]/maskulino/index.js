import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Header from '../../../components/Maskulino/Header';
import BannerNav from '../../../components/Maskulino/BannerNav';
import About from '../../../components/Maskulino/About';
import Timeline from '../../../components/Maskulino/Timeline';
import Counter from '../../../components/Maskulino/Counter';
import Services from '../../../components/Maskulino/Services';
import Gallery from '../../../components/Maskulino/Gallery';
import Testimonials from '../../../components/Maskulino/Testimonials';
import Blog from '../../../components/Maskulino/Blog';
import Footer from '../../../components/Maskulino/Footer';
import PageNav from '../../../components/Maskulino/PageNav';
import Decoration from '../../../components/Maskulino/Parallax/Decoration';
import Notification from '../../../components/Maskulino/Notification';
import brand from '../../../public/text/brand';
import Maskulino from '../../../components/wrapper/Maskulino';

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


function MaskulinoPage(props) {
  const { classes, cx } = useStyles();
  return (
    <Fragment>
      <Maskulino>
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
      </Maskulino>
    </Fragment>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default MaskulinoPage;
