import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const featuredStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {},
  videoCarousel: {
    boxShadow: theme.shadows[15],
    background: theme.palette.text.primary,
    height: 420,
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.down('md')]: {
      height: 360
    },
    [theme.breakpoints.down('sm')]: {
      height: 220
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        visibility: 'hidden'
      },
      '& li': {
        width: 15,
        height: 15,
        background: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          width: 40,
        },
        '&:hover': {
          opacity: 0.5
        }
      },
      '& li button:before': {
        display: 'none'
      }
    },
    '& div[class*="slick-active"]': {
      [`& .${classes.item}`]: {
        opacity: 1,
        transitionDelay: '0.3s',
        [`& .${classes.playBtn}`]: {
          display: 'block',
          zIndex: 100
        }
      }
    }
  },
  item: {
    overflow: 'hidden',
    background: theme.palette.common.black,
    opacity: 0,
    transition: 'opacity 0.7s ease-out',
    height: 420,
    [theme.breakpoints.down('md')]: {
      height: 360
    },
    [theme.breakpoints.down('sm')]: {
      height: 220
    },
    '& img': {
      opacity: 0.5,
      width: '100%',
      minHeight: '100%',
      display: 'block'
    }
  },
  playBtn: {
    borderRadius: 0,
    background: alpha(theme.palette.secondary.main, 0.5),
    backdropFilter: 'saturate(90%) blur(5px)',
    position: 'absolute',
    width: 80,
    height: 80,
    left: 'calc(50% - 40px)',
    top: 'calc(50% - 40px)',
    padding: 0,
    display: 'none',
    '& svg': {
      fill: theme.palette.common.white,
      width: 80,
      height: 80,
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featuredStyles;
