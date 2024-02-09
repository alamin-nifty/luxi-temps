import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
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
  openDrawer: {},
  invert: {
    color: theme.palette.text.primary,
    [`& .${classes.mobileMenu}`]: {
      [`& .${classes.bar}`]: {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        },
      }
    },
    '& svg': {
      fill: theme.palette.text.primary,
    },
  },
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    zIndex: 20,
    transition: 'background 0.5s ease-out',
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      paddingBottom: theme.spacing(1),
      background: alpha(theme.palette.primary.dark, 0.5),
      backdropFilter: 'saturate(180%) blur(20px)',
      [`& .${classes.logo}`]: {
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0,
        },
      },
      '& nav': {
        '& a': {
          color: theme.palette.common.white
        },
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        },
        '& svg': {
          fill: theme.palette.common.white,
        },
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
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      }
    }
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
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      width: 64,
      height: 64,
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    flex: 1,
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1),
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          margin: '0 4px',
          background: 'none !important',
          transition: 'all 0.3s ease-out',
          '&:after': {
            content: '""',
            height: 3,
            position: 'absolute',
            width: '0%',
            bottom: -5,
            margin: '0 auto',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            color: theme.palette.secondary.light
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.secondary.light,
            '&:after': {
              background: theme.palette.secondary.light,
              width: '100%',
            },
          }
        }
      }
    },
    [`&.${classes.invert}`]: {
      '& a': {
        color: theme.palette.text.primary,
      }
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    }
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      fontSize: 32,
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      [`&.${classes.invert}`]: {
        color: theme.palette.text.primary
      }
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    backdropFilter: 'saturate(180%) blur(20px)',
    background: alpha(theme.palette.primary.dark, 0.5),
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      },
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
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease',
        color: theme.palette.common.white
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
