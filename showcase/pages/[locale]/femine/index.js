import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Header from '../../../components/Femine/Header';
import BannerNav from '../../../components/Femine/BannerNav';
import About from '../../../components/Femine/About';
import Timeline from '../../../components/Femine/Timeline';
import Counter from '../../../components/Femine/Counter';
import Services from '../../../components/Femine/Services';
import Gallery from '../../../components/Femine/Gallery';
import Testimonials from '../../../components/Femine/Testimonials';
import Blog from '../../../components/Femine/Blog';
import Footer from '../../../components/Femine/Footer';
import PageNav from '../../../components/Femine/PageNav';
import Decoration from '../../../components/Femine/Parallax/Decoration';
import Notification from '../../../components/Femine/Notification';
import brand from '../../../public/text/brand';
import Femine from '../../../components/wrapper/Femine';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
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


function FeminePage(props) {
  const { classes, cx } = useStyles();
  return (
    <Fragment>
      <Femine>
        <Header/>
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
        <Hidden mdDown>
          <Notification />
        </Hidden>
        <Hidden smDown>
          <PageNav />
        </Hidden>
      </Femine>
    </Fragment>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default FeminePage;
