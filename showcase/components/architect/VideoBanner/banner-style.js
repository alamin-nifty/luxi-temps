import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const bannerStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  root: {
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 1
      }
    },
    [theme.breakpoints.up('md')]: {
      '&:after': {
        content: '""',
        position: 'absolute',
        right: 0,
        width: '75%',
        height: 160,
        background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
        transform: theme.direction === 'rtl' ? 'skew(0, -10deg)' : 'skew(0, 10deg)',
        bottom: -55,
        [theme.breakpoints.down('lg')]: {
          display: 'none'
        }
      }
    }
  },
  bannerWrap: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  parallax: {
    right: 0
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.57)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  video: {
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    height: 500,
    width: '100%',
    '& iframe': {
      width: '100%',
      marginTop: -30
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-12%',
      height: 650,
    },
    [theme.breakpoints.up('1400')]: {
      marginLeft: '-16%'
    },
    background: theme.palette.common.black,
    '& img': {
      minHeight: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      }
    }
  },
  block: {
    position: 'absolute',
    width: '100%',
    left: 0,
    zIndex: 10,
    top: 200,
    [theme.breakpoints.up('sm')]: {
      top: 'auto',
      bottom: theme.spacing(15),
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.down('sm')]: {
      top: 140
    }
  },
  paperWrap: {
    [theme.breakpoints.up('sm')]: {
      backdropFilter: 'saturate(90%) blur(5px)',
    },
    [theme.breakpoints.up('md')]: {
      borderLeft: `80px solid ${alpha(theme.palette.secondary.dark, 0.3)}`,
    },
  },
  paper: {
    position: 'relative',
    maxHeight: 300,
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      background: alpha(theme.palette.background.paper, 0.85),
      backdropFilter: 'saturate(90%) blur(5px)',
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      background: 'none'
    },
    '& h4': {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.common.white
      }
    },
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      opacity: 0.87,
      color: theme.palette.common.white
    }
  },
  button: {
    width: 190,
    bottom: -20,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  btnPlay: {
    position: 'absolute',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    borderRadius: 0,
    background: alpha(theme.palette.secondary.main, 0.5),
    backdropFilter: 'saturate(90%) blur(5px)',
    left: 0,
    top: 'calc(100% - 80px)',
    '& svg': {
      width: 60,
      height: 60,
      fill: theme.palette.common.white
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bannerStyles;
