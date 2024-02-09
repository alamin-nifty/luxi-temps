import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Header from '~/components/Header';
import VideoBanner from '~/components/VideoBanner';
import Services from '~/components/Services';
import Project from '~/components/Project';
import Featured from '~/components/Featured';
import About from '~/components/About';
import Team from '~/components/Team';
import Counter from '~/components/Counter';
import Blog from '~/components/Blog';
import Subscribe from '~/components/SubscribeForm';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';

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

function Landing(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.architect.name + ' - Home Page' }
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
          <Footer toggleDir={onToggleDir} />
        </main>
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
