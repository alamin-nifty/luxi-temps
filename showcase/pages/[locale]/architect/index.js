import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import VideoBanner from '../../../components/architect/VideoBanner';
import Services from '../../../components/architect/Services';
import Project from '../../../components/architect/Project';
import Featured from '../../../components/architect/Featured';
import About from '../../../components/architect/About';
import Team from '../../../components/architect/Team';
import Counter from '../../../components/architect/Counter';
import Blog from '../../../components/architect/Blog';
import Subscribe from '../../../components/architect/SubscribeForm';
// Theme Wrapper
import Architect from '../../../components/wrapper/Architect';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingBottom: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    paddingBottom: theme.spacing(20),
  },
  spaceTop: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingTop: sectionMargin(6),
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
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Architect pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <VideoBanner />
        </section>
        <section id="services" className={classes.spaceTopShort}>
          <Services />
        </section>
        <section id="project" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
          <Project />
        </section>
        <section id="featured" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
          <Featured />
        </section>
        <section id="about">
          <div className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
            <About />
          </div>
          <div className={classes.spaceTopShort}>
            <Team />
          </div>
          <div>
            <Counter />
          </div>
        </section>
        <div id="blog" className={classes.spaceTopShort}>
          <Blog />
        </div>
        <section id="subscribe" className={classes.spaceTopShort}>
          <Subscribe />
        </section>
      </main>
    </Architect>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
