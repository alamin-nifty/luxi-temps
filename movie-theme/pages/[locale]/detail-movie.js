import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Icon from '@mui/material/Icon';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header';

const useStyles = makeStyles({ uniqId: 'detail' })((theme, _params, classes) => ({
  mainWrap: {
    background: theme.palette.background.paper,
  },
  bgWrap: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: 720
  },
  containerWrap: {
    padding: theme.spacing(20, 4, 15),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing()
    }
  },
  bgMovie: {
    direction: 'ltr',
    width: '200%',
    height: 720,
    marginLeft: '-50%',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      height: 480
    },
    '& img': {
      width: '50%',
      top: '-50%',
      position: 'relative',
      margin: '0 auto',
      opacity: 0.2,
      filter: 'blur(20px)',
      left: theme.direction === 'rtl' ? '-25%' : '25%'
    }
  },
  text: {
    flex: 1,
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    },
    '& h4': {
      fontSize: '2.28rem',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      width: '100%',
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium,
      }
    }
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  star: {
    marginTop: -3,
    marginRight: theme.spacing(2),
    '& span': {
      color: '#FF9500'
    }
  },
  divider: {
    background: 'none',
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    height: 12,
    margin: theme.spacing(0.5, 2),
    display: 'inline-block',
  },
  btnArea: {
    zIndex: 10,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(0, 0, 2)
      }
    },
    '& > *': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing()
      }
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnAreaSmall: {
    margin: theme.spacing(2, 0, 0, -1),
    '& > *': {
      marginRight: theme.spacing(1)
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnText: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  desc: {
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(5),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  image: {
    textAlign: 'center',
    lineHeight: '360px',
    verticalAlign: 'middle',
    '& figure': {
      width: 250,
      height: 360,
      overflow: 'hidden',
      margin: '0 auto',
      boxShadow: theme.shadows[3],
      borderRadius: 20,
      '& img': {
        width: '100%'
      }
    },
    '& i': {
      position: 'absolute',
      fontSize: 52,
      top: 'calc(50% - 30px)',
      left: 'calc(50% - 30px)',
      border: `5px solid ${theme.palette.common.white}`,
      zIndex: 10,
      borderRadius: '50%',
      width: 60,
      height: 60,
      lineHeight: '44px',
      paddingLeft: theme.direction === 'rtl' ? 0 : 4,
      paddingRight: theme.direction === 'rtl' ? 4 : 0,
      color: theme.palette.common.white,
      background: 'rgba(0, 0, 0, 0.4)'
    },
  },
  about: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(7, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    },
    [`& .${classes.btnArea}`]: {
      marginTop: theme.spacing(6)
    }
  },
  person: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5)
    },
    '& h6': {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      marginBottom: theme.spacing(4)
    }
  }
}));

function DetailProduct(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.movie.name + ' - Detail Movie' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <div className={classes.bgWrap}>
          <div className={classes.bgMovie}>
            <img src={imgAPI.movie[15]} alt="poster" />
          </div>
        </div>
        <main className={classes.containerWrap}>
          <Container maxWidth="lg">
            <Grid container spacing={6} justifyContent="center" direction={isDesktop ? 'row-reverse' : 'row'}>
              <Grid item sm={5} md={5} xs={12}>
                <div className={classes.image}>
                  <ButtonBase focusRipple href="#">
                    <i className="ion-ios-play play" />
                    <figure>
                      <img src={imgAPI.movie[15]} alt="movie" />
                    </figure>
                  </ButtonBase>
                </div>
              </Grid>
              <Grid item lg={5} sm={7} xs={12}>
                <div className={classes.text}>
                  <Typography variant="h4">
                    <span className={text.subtitle2}>
                      Vivamus sit amet
                    </span>
                    The Lorem Ipsum Dolor Sit Amet
                  </Typography>
                  <div className={classes.property}>
                    <span className={classes.star}>
                      {[...Array(5)].map((e, indexStar) => (
                        <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                      ))}
                    </span>
                    5.0
                    <span className={classes.divider} />
                    2h 13m
                  </div>
                  <article className={classes.desc}>
                    <Typography component="h6" className={text.paragraph}>
                      Drama, Action and Adventure
                    </Typography>
                  </article>
                  <section className={classes.btnArea}>
                    <Button className={classes.btnText} color="secondary">
                      {t('movie-landing.promo_btn1')}
                    </Button>
                    <Button variant="contained" size="large" color="primary">
                      {t('movie-landing.promo_btn2')}
                    </Button>
                  </section>
                </div>
              </Grid>
            </Grid>
          </Container>
          <Grid container justifyContent="center">
            <Grid item lg={10} md={12}>
              <Paper className={classes.about}>
                <Grid container spacing={6}>
                  <Grid item md={7} xs={12}>
                    <Box mb={3}>
                      <Typography variant="h4" className={text.title2}>
                        {t('movie-landing.detail_storyline')}
                      </Typography>
                    </Box>
                    <Typography>
                      Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <div className={classes.btnAreaSmall}>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-md-share" />
                        {t('movie-landing.detail_share')}
                      </Button>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-ios-film" />
                        {t('movie-landing.detail_trivia')}
                      </Button>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-ios-star" />
                        {t('movie-landing.detail_rate')}
                      </Button>
                    </div>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <div className={classes.person}>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('movie-landing.detail_director')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        John Doe
                      </Typography>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('movie-landing.detail_writers')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        John Doe, Jim Doe, Jane Doe
                      </Typography>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('movie-landing.detail_stars')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        Jena Doe, James Doe, Jack Doe, Jimmy Doe
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </main>
        <section className={classes.spaceTop}>
          <Footer invert />
        </section>
      </div>
    </React.Fragment>
  );
}

DetailProduct.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default DetailProduct;
