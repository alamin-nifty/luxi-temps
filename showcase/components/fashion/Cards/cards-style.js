import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const cardsStyles = makeStyles({ uniqId: 'card' })((theme, _params, classes) => ({
  btnWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  productRatting: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    '& figure': {
      overflow: 'hidden',
      margin: 0,
      position: 'relative',
      height: 240,
      [theme.breakpoints.down('sm')]: {
        height: 320
      },
      [theme.breakpoints.up('lg')]: {
        height: 320,
      },
      '& img': {
        transition: 'all 0.3s',
        minHeight: '100%',
        transform: 'translateX(-10px)',
        width: '105%',
      },
      '& figcaption': {
        top: 16,
        left: 16,
        background: theme.palette.primary.dark,
        textAlign: 'center',
        color: theme.palette.common.white,
        padding: theme.spacing(0.75, 1.5)
      }
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    },
    '&:hover': {
      '& img': {
        transform: 'translateX(0px)'
      }
    },
    '& h5': {
      fontSize: 20
    }
  },
  ratting: {
    padding: theme.spacing(1.5, 0),
  },
  starIcon: {
    fill: theme.palette.primary.main,
    outline: theme.palette.primary.light
  },
  category: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.dark,
    padding: theme.spacing(0, 3),
    '&:before': {
      transition: 'all 0.3s ease-out',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '20%',
      height: '100%',
      background: alpha(theme.palette.common.black, 0.06),
      opacity: 0,
    },
    '&:hover': {
      '&:before': {
        opacity: 1,
        width: '100%'
      }
    }
  },
  button: {},
  total: {},
  title: {},
  property: {
    paddingLeft: theme.spacing(3),
    flex: 1,
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'block',
    [`& .${classes.title}`]: {
      textTransform: 'capitalize',
      display: 'block',
      fontFamily: 'Roboto Condensed',
      textAlign: 'left',
      lineHeight: 'normal'
    },
    [`& .${classes.total}`]: {
      textAlign: 'left',
      display: 'block'
    },
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(3)
    }
  },
  buttonBase: {
    marginBottom: theme.spacing(1.5),
    width: '100%'
  },
  full: {
    height: 170,
    '& img': {
      maxWidth: '50%',
      maxHeight: 130,
      height: 'auto',
    }
  },
  topOver: {
    marginBottom: theme.spacing(1.5),
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      marginTop: 50,
      height: 230,
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6)
      }
    },
    '& img': {
      maxWidth: '50%',
      marginTop: 14,
      [theme.breakpoints.up('lg')]: {
        marginTop: -60,
        height: 290,
      },
    }
  },
  bottomOver: {
    marginBottom: theme.spacing(1.5),
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 230,
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
    '& img': {
      maxWidth: '50%',
      padding: theme.spacing(),
      [theme.breakpoints.up('lg')]: {
        height: 460,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 270,
      },
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6)
      }
    },
  },
  simpleThumb: {
    textAlign: 'center',
    width: 150,
    height: 210,
    padding: theme.spacing(2, 1),
    transition: 'all 0.35s ease-out',
    margin: `${theme.spacing()}px auto`,
    '& p': {
      fontSize: 16,
    },
    '& figure': {
      height: 120,
      margin: theme.spacing(0, 1, 2),
      textAlign: 'center',
      '& img': {
        display: 'block',
        maxHeight: '100%',
        margin: '0 auto'
      }
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    },
    '&:hover': {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      boxShadow: theme.shade.light
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
