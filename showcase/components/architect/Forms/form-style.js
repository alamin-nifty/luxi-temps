import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  title: {},
  bgDeco: {
    position: 'absolute',
    top: -80,
    right: 0,
    width: '60%',
    height: 700,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    transform: 'skew(0, 10deg)'
  },
  parallax: {
    position: 'absolute',
    right: -100,
    top: 300
  },
  pageWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(10, 5),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 1)
    },
    [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& a': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    }
  },
  innerWrap: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  fullFromWrap: {
    padding: theme.spacing(1, 0, 9),
  },
  formBox: {
    position: 'relative',
    zIndex: 100,
    [theme.breakpoints.up('md')]: {
      backdropFilter: 'saturate(90%) blur(10px)',
      background: alpha(theme.palette.background.paper, 0.8),
    },
    [theme.breakpoints.down('lg')]: {
      boxShadow: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      background: 'none',
    },
  },
  wrapDeco: {
    position: 'relative'
  },
  frmDeco: {
    width: 250,
    height: 250,
    position: 'absolute',
    background: theme.palette.secondary.main,
    bottom: -32,
    opacity: 0.5,
    left: -30
  },
  desc: {
    fontSize: 20,
    color: theme.palette.text.secondary
  },
  input: {
    width: '100%',
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2),
    },
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  btnArea: {
    marginTop: theme.spacing(5),
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%'
      }
    },
    '& button': {
      marginTop: theme.spacing(2),
      minHeight: 48,
      fontSize: 18
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    },
    [`&.${classes.flex}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },
  },
  checkArea: {
    marginTop: theme.spacing(5),
    color: theme.palette.text.primary,
    position: 'relative'
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  flex: {},
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    },
    '& img': {
      width: 64,
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  signArrow: {},
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8)
    }
  },
  map: {
    height: 640,
    top: 120,
    position: 'relative',
    zIndex: 20,
    marginLeft: theme.spacing(-6),
    boxShadow: '0 0 20px 1px rgba(0, 0, 0, 0.4)'
  },
  bubelWrap: {
    position: 'relative'
  },
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 450,
    left: -250,
    top: -300,
    '& p': {
      fontSize: 13,
    },
  },
  icon: {
    color: '#607D8B',
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative',
    fontSize: 16,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
