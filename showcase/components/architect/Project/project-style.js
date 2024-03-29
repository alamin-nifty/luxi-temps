import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const blogStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  root: {
    position: 'relative',
    '&:before': {
      content: '""',
      borderBottom: `700px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}`,
      borderLeft: '1480px solid transparent',
      position: 'absolute',
      bottom: -500,
      right: 0,
      opacity: 0.5,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        bottom: -250,
      }
    }
  },
  parallaxWrap: {
    position: 'absolute',
    left: 200,
    top: 200,
    width: 500
  },
  props: {
    '& > div': {
      width: 440,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(10),
      top: theme.spacing(15),
      width: 360
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(5),
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      margin: '0 auto'
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    marginTop: -45,
    width: 36,
    zIndex: 3,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: alpha(theme.palette.background.paper, 0.9),
    border: 'none',
    boxShadow: 'none',
    transform: theme.direction === 'rtl' ? 'scale(-2.5)' : 'scale(2.5)',
    '&:hover': {
      background: theme.palette.background.paper
    },
    '& i': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
