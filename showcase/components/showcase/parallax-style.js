import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& [class="figure"]': {
      height: 1000,
      width: '100%',
      position: 'relative',
      top: 500,
    }
  },
  bannerParallaxWrap: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& > div': {
        height: 800,
        width: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
      }
    },
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0.5)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxDot: {
    top: -20,
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.2,
    right: -70
  },
  parallaxCircle: {
    top: 300,
    outline: theme.palette.text.disabled,
    opacity: 0.1,
    width: 902,
    height: 1042,
    stroke: theme.palette.text.disabled,
    fill: 'transparent',
    strokeWidth: 50,
    left: -400
  },
}));

export default featureStyles;
