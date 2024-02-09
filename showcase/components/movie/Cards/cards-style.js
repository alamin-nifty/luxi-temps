import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'card' })((theme, _params, classes) => ({
  /* MOVIE THUMB */
  btnWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  text: {},
  movieThumb: {
    margin: '0 auto',
    maxWidth: 300,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
    },
    [`& .${classes.btnWrap}`]: {
      display: 'block',
      borderRadius: theme.rounded.big,
      background: theme.palette.background.paper,
      padding: '0 !important',
      color: theme.palette.text.primary,
      textAlign: 'center',
    },
    '& figure': {
      overflow: 'hidden',
      margin: 0,
      display: 'flex',
      position: 'relative',
      borderRadius: theme.rounded.big,
      boxShadow: theme.shadows[4],
      '& img': {
        transition: 'all 0.3s',
        minHeight: '100%',
        width: '100%',
      },
      '& figcaption': {
        position: 'absolute',
        textTransform: 'uppercase',
        borderRadius: 40,
        top: 16,
        left: 16,
        background: theme.palette.common.black,
        textAlign: 'center',
        color: theme.palette.common.white,
        padding: theme.spacing(0.75, 1.5),
        zIndex: 10
      },
      '& i': {
        position: 'absolute',
        fontSize: 52,
        top: 'calc(50% - 30px)',
        left: 'calc(50% - 30px)',
        border: '5px solid #FFF',
        zIndex: 10,
        borderRadius: '50%',
        width: 60,
        height: 60,
        lineHeight: '44px',
        paddingLeft: theme.direction === 'rtl' ? 0 : 4,
        paddingRight: theme.direction === 'rtl' ? 4 : 0,
        opacity: 0,
        transform: 'scale(0.5)',
        transition: 'all 0.3s ease-out',
        color: theme.palette.common.white
      },
      '&:after': {
        transition: 'all 0.3s ease',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        backgroundImage: `linear-gradient(-44deg, ${theme.palette.secondary.main} 6%, ${theme.palette.primary.main} 100%)`,
      },
      '&:hover': {
        '& i': {
          opacity: 1,
          transform: 'scale(1)'
        },
        '&:after': {
          opacity: 0.6
        }
      }
    },
    [`& .${classes.text}`]: {
      display: 'block',
      width: '100%',
      fontSize: 16,
      padding: theme.spacing(),
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none'
    }
  },
  /* CATEGORY CARD */
  category: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    background: theme.palette.primary.dark,
    padding: theme.spacing(0, 3),
    marginBottom: 12,
    overflow: 'hidden',
    borderRadius: theme.rounded.big,
    boxShadow: theme.shadows[3],
    '&:before': {
      transition: 'all 0.3s ease-out',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '20%',
      height: '100%',
      opacity: 0,
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,0.00) 2%, rgba(0,0,0,0.30) 91%)'
    },
    '&:hover': {
      '&:before': {
        width: '100%',
        opacity: 1,
      }
    }
  },
  button: {},
  total: {},
  title: {},
  property: {
    position: 'relative',
    color: theme.palette.common.white,
    paddingLeft: theme.spacing(3),
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(2)
    },
    [`& .${classes.title}`]: {
      textTransform: 'capitalize',
      display: 'block',
      textAlign: 'left',
      fontSize: 28,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 'normal'
    },
    [`& .${classes.total}`]: {
      textAlign: 'left',
      display: 'block'
    },
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(3),
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
    }
  },
  buttonBase: {
    marginBottom: theme.spacing(1.5),
    width: '100%'
  },
  full: {
    height: 170,
    alignItems: 'flex-end',
    '@media (min-width: 960px) and (max-width: 1279px)': {
      flexDirection: 'column-reverse',
    },
    [`& .${classes.title}`]: {
      fontSize: 20
    },
    '& img': {
      maxWidth: '50%',
      maxHeight: 130,
      height: 'auto',
      '@media (min-width: 960px) and (max-width: 1279px)': {
        maxHeight: 60
      }
    }
  },
  halfChar: {
    marginBottom: theme.spacing(1.5),
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 300
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
      position: 'relative',
      maxWidth: '50%',
      marginTop: 14,
      [theme.breakpoints.up('lg')]: {
        height: 290
      },
    }
  },
  fullChar: {
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      height: 504,
      overflow: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
    '& img': {
      top: theme.spacing(6),
      position: 'relative',
      maxWidth: '50%',
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6)
      }
    },
  },
  shadow: {
    position: 'absolute !important',
    opacity: 0.15,
    top: '-120px !important',
    left: 0,
    transform: 'scale(2)',
    zIndex: 0,
    transformOrigin: 'center top'
  },
  /* SIMPLE CARD */
  simpleThumb: {
    textAlign: 'center',
    padding: theme.spacing(2, 1),
    transition: 'all 0.35s ease-out',
    margin: `${theme.spacing()}px auto`,
    color: theme.palette.text.primary,
    '& p': {
      fontSize: 16,
    },
    [`& .${classes.text}`]: {
      display: 'block',
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      marginBottom: 0,
      lineHeight: 1.5
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  figure: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: theme.rounded.big,
    padding: 3,
    overflow: 'hidden',
    display: 'block',
    verticalAlign: 'middle',
    margin: theme.spacing(0, 2, 1),
    '& span': {
      height: 94,
      width: 94,
      lineHeight: '94px',
      background: theme.palette.background.paper,
      borderRadius: theme.rounded.big,
      display: 'block'
    },
    '& i': {
      fontSize: 80,
      '&:before': {
        background: theme.palette.mode === 'light' ? `linear-gradient(330deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : `linear-gradient(330deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },
  /* PRICING AND PLAN CARD */
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    boxShadow: `0 0 10px 0px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
    maxWidth: 300,
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    },
    [`& .${classes.title}`]: {
      padding: theme.spacing(5, 0, 2),
      textTransform: 'uppercase',
      fontSize: 24,
      position: 'relative',
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      '& p': {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightBold,
        position: 'relative',
        color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light
      },
      '& h4': {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'none',
        marginTop: theme.spacing(2)
      }
    },
  },
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      fontSize: 14,
    }
  },
  basic: {
    [`& .${classes.title}`]: {
      '& p': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      }
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      boxShadow: theme.palette.mode === 'light' ? `0 0 20px 5px ${theme.palette.secondary.light}` : '0 0 20px 5px #303030',
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    [`& .${classes.title}`]: {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white,
      },
      '& p': {
        color: theme.palette.common.white
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(145deg, ${theme.palette.secondary.main} 40%, ${theme.palette.primary.main} 80%)`,
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    }
  },
  /* NEWS CARD */
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: 'auto',
        },
      }
    },
    [`& .${classes.text}`]: {
      padding: theme.spacing(0, 1.5),
      maxWidth: 400
    },
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
