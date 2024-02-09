import { makeStyles } from 'tss-react/mui';
import flag from '~/public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  invert: {},
  openDrawer: {},
  header: {
    position: 'absolute',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'background 0.3s ease',
    zIndex: 100,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
      background: 'none',
      filter: 'none'
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.navMenu}`]: {
        '& svg': {
          fill: theme.palette.text.primary
        },
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      [`& .${classes.divider}`]: {
        borderColor: theme.palette.divider
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          backgroundColor: `${theme.palette.text.primary}`,
          '&:after, &:before': {
            backgroundColor: `${theme.palette.text.primary}`
          }
        }
      },
    },
    [`&.${classes.fixed}`]: {
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'saturate(180%) blur(20px)',
      [`& .${classes.navMenu}`]: {
        '& svg': {
          fill: theme.palette.common.white
        },
        '& a': {
          color: theme.palette.common.white
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          },
        }
      },
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      display: 'flex'
    }
  },
  logo: {
    marginRight: theme.spacing(),
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      width: 64,
      height: 64,
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48,
      }
    }
  },
  active: {},
  button: {},
  navLogo: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('lg')]: {
      flex: 1,
    },
  },
  navMenu: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: theme.spacing(0, 2),
          fontWeight: theme.typography.fontWeightMedium,
          transition: 'all 0.3s ease-out',
          color: theme.palette.common.white,
          fontSize: 16,
          boxShadow: 'none',
          position: 'relative',
          margin: theme.spacing(0.5, 1),
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)'
          },
          [theme.breakpoints.down('lg')]: {
            margin: theme.spacing(0, 3),
          },
          [theme.breakpoints.down('sm')]: {
            margin: 0
          },
        },
        '&[class="active"]': {
          '& a': {
            boxShadow: '0 1.5px 32px -8px rgba(0, 0, 0, 0.22)',
            color: `${theme.palette.common.white} !important`,
            background: theme.palette.primary.main,
          }
        }
      }
    }
  },
  navAuth: {
    justifyContent: 'space-evenly',
    '& a': {
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 4),
      margin: theme.spacing(0, 0.5),
      fontSize: 16,
    },
    [`& .${classes.button}`]: {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.main + '!important',
      fontWeight: theme.typography.fontWeightBold
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'saturate(180%) blur(20px)',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: `${theme.palette.common.white}`,
      '&:after, &:before': {
        backgroundColor: `${theme.palette.common.white}`
      }
    },
    '&[class*="is-active"]': {
      [`& .${classes.bar}`]: {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      },
    }
  },
  mobileNav: {
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: theme.spacing(10),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  divider: {
    background: 'none',
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    height: 20
  },
  dividerSidebar: {
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '1rem 0'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
