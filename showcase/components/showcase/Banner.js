import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { lighten, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Parallax } from 'react-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '~/public/images/showcase/logo.png';
import imgAPI from '~/public/images/imgAPI';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

const useStyles = makeStyles({ uniqId: 'banner' })(theme => ({
  bannerWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 1200,
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
      background: `url(${imgAPI.showcase[0]}) no-repeat top left`
    },
    [theme.breakpoints.down('sm')]: {
      height: 800,
      backgroundPosition: 'left -160px'
    }
  },
  parallax: {
    top: 700,
    left: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& > div': {
      height: '100%'
    },
  },
  properties: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    padding: theme.spacing(24, 8),
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(20, 2),
      '& h4': {
        fontSize: 22,
        lineHeight: '34px'
      }
    }
  },
  title: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& h1': {
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '4rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem'
      }
    },
    '& img': {
      width: 60,
      top: -28,
      position: 'relative'
    },
  },
  tech: {
    height: 80,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto'
    }
  },
  white: {
    background: '#FFFFFF',
    color: '#6300cc',
    border: '1px solid #6300cc',
    boxShadow: theme.shadows[2],
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.8)
    }
  },
  primary: {
    background: '#4ff1eb',
    color: '#1b5a58',
    boxShadow: theme.shadows[2],
    '&:hover': {
      background: lighten('#4ff1eb', 0.5),
    }
  },
  btnArea: {
    display: 'flex',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& button, & a': {
      fontSize: 20,
      width: 250,
      padding: theme.spacing(1, 2),
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4)
      }
    }
  }
}));

function Banner() {
  const { classes } = useStyles();
  return (
    <div className={classes.bannerWrap}>
      <div className={classes.parallax}>
        <Parallax
          bgImage={imgAPI.showcase[0]}
          bgImageAlt="banner"
          strength={300}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      <div className={classes.properties}>
        <div className={classes.title}>
          <img src={logo} alt="logo" />
          <Typography variant="h1" gutterBottom>Luxiren</Typography>
        </div>
        <Typography variant="h4">React.js Landing Page Collection</Typography>
        <img src="/images/showcase/tech.png" alt="text" className={classes.tech} />
        <div className={classes.btnArea}>
          <Button
            variant="contained"
            size="large"
            className={classes.primary}
            color="primary"
            href="https://themeforest.net/item/luxiren-react-js-landing-page-collection/25087071"
          >
            Buy Now
          </Button>
          <Button
            variant="contained"
            component={LinkBtn}
            offset={100}
            href="#explore"
            className={classes.white}
            size="large"
          >
            Explore Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
