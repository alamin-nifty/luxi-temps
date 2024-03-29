import { makeStyles } from 'tss-react/mui';
import crossDecoLight from '~/public/images/decoration/cross-deco-light.png';
import crossDecoDark from '~/public/images/decoration/cross-deco-dark.png';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
  },
  dotsWrap: {
    top: -200,
    left: -200
  },
  crossWrap: {
    zIndex: 10,
    top: -100,
    right: -120,
    left: 'auto'
  },
  parallaxDot: {
    fill: theme.palette.text.disabled,
    width: 1015,
    height: 1099,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute',
  },
  parallaxCross: {
    background: `url(${theme.palette.mode === 'dark' ? crossDecoDark : crossDecoLight}) repeat 0px -30px`,
    width: 445,
    height: 1099,
    top: 90,
    right: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute'
  },
  parallaxBox: {
    width: '100%',
    height: 350,
    top: -2400,
    right: 0,
    position: 'absolute'
  },
  bigBox: {
    width: 300,
    height: 250,
    background: theme.palette.secondary.main,
    opacity: 0.5,
    top: 2420,
    left: -80,
    position: 'absolute'
  },
  smallBox: {
    width: 150,
    height: 180,
    background: theme.palette.primary.main,
    opacity: 0.5,
    top: 2550,
    right: -50,
    position: 'absolute'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
