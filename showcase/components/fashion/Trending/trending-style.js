import { makeStyles } from 'tss-react/mui';

const overlay = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: 40,
  top: 0,
  left: 0
};

const trendingStyles = makeStyles({ uniqId: 'trending' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  overlay: {},
  grid25: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      width: '33%',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
    },
    '&:hover': {
      '& img': {
        transform: 'translateX(0px)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      transform: 'translateX(-10px)',
      minHeight: '100%',
      width: 'calc(100% + 20px)',
    },
    [`& .${classes.overlay}`]: {
      backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.64), transparent)',
      ...overlay,
    },
    '& h5': {
      textTransform: 'uppercase',
      position: 'absolute',
      bottom: 50,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  grid50: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      width: '33%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      height: '100%',
      minWidth: '100%',
    },
    [`& .${classes.overlay}`]: {
      backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0.64), transparent)',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        alignItems: 'center'
      },
      ...overlay
    },
    '& h5': {
      textTransform: 'uppercase',
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular
    },
    '& h3': {
      textTransform: 'uppercase',
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: 'underline'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default trendingStyles;
