import React from 'react';
import { makeStyles } from 'tss-react/mui';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Banner from '../../../components/education/Banner';
import Feature from '../../../components/education/Feature';
import PopularCourse from '../../../components/education/PopularCourse';
import Explore from '../../../components/education/Explore';
import About from '../../../components/education/About';
import Testimonials from '../../../components/education/Testimonials';
import Blog from '../../../components/education/Blog';
import Subscribe from '../../../components/education/SubscribeForm';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingBottom: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    paddingBottom: theme.spacing(10),
  },
  spaceTop: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingTop: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: sectionMargin(4),
    }
  },
  spaceTopShort: {
    paddingTop: theme.spacing(10),
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const { classes } = useStyles();
  return (
    <Education pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <Banner />
        </section>
        <section id="feature" className={classes.spaceTop}>
          <Feature />
        </section>
        <section id="popular" className={classes.spaceTopShort}>
          <PopularCourse />
        </section>
        <section id="explore">
          <Explore />
        </section>
        <div id="about">
          <About />
        </div>
        <div id="testimonials" className={classes.spaceTop}>
          <Testimonials />
        </div>
        <section id="blog" className={classes.spaceTopShort}>
          <Blog />
        </section>
        <section id="subscribe" className={classes.spaceTopShort}>
          <Subscribe />
        </section>
      </main>
    </Education>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
