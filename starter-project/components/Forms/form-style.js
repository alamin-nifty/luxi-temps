import { alpha, darken } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  title: {},
  pageWrap: {
    padding: theme.spacing(11, 5),
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 0),
    },
    [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  innerWrap: {
    textAlign: 'left',
  },
  fullFromWrap: {
    background: theme.palette.background.paper,
    padding: theme.spacing(9, 0),
  },
  formBox: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    background: alpha(theme.palette.background.paper, 0.7),
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.05)',
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
      fontSize: 16
    }
  },
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '> div': {
      overflow: 'hidden',
      background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eeeeee',
      '&:hover': {
        background: darken(theme.palette.background.paper, 0.1)
      },
      'input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: theme.palette.background.default
        },
      }
    },
    [`&.${classes.light}`]: {
      '& label': {
        color: theme.palette.common.white,
      },
      '& > div': {
        border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: alpha(theme.palette.text.disabled, 0.2)
          },
          '&:hover': {
            background: alpha(theme.palette.text.disabled, 0.2)
          }
        },
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 10),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 10),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  btnArea: {
    marginTop: theme.spacing(5),
    '& button': {
      marginTop: theme.spacing(2)
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
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
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative',
  },
  greeting: {
    padding: theme.spacing(15, 6),
    height: '100%',
    background: theme.palette.primary.light,
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    'p, span': {
      display: 'block',
      textTransform: 'lowercase',
      fontSize: 24,
      paddingBottom: 4,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  formWrap: {
    minHeight: 760,
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10),
    overflow: 'hidden',
    [`&.${classes.frmDeco}`]: {
      left: '58.333333%',
      transform: 'translateX(-72%)',
      bottom: '-75px'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    '> *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
    },
    '& svg': {
      fill: theme.palette.common.white,
      marginRight: theme.spacing()
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      '> *': {
        marginBottom: theme.spacing(2),
        width: '100%'
      }
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: `${theme.spacing(5)} auto`,
    maxWidth: 340,
    minWidth: 256,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.disabled}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
