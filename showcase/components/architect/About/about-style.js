import { makeStyles } from 'tss-react/mui';

const aboutStyles = makeStyles({ uniqId: 'about' })((theme, _params, classes) => ({
  illustration: {},
  root: {
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '-90deg' : '90deg'}, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 70%, ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 70%)`,
    [theme.breakpoints.down('md')]: {
      background: theme.palette.secondary.main,
    },
    [`& .${classes.illustration}`]: {
      zIndex: 10,
      height: 415,
      position: 'absolute',
      top: -20,
      right: 0,
      [theme.breakpoints.down('lg')]: {
        height: '100%',
      }
    },
  },
  bgDeco: {
    position: 'absolute',
    top: 20,
    right: -100,
    width: 600,
    height: 700,
    '& img': {
      transform: 'scale(1.8)',
      opacity: 0.1,
      [theme.breakpoints.down('lg')]: {
        transform: 'scale(1.2)'
      }
    }
  },
  illusWrap: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
