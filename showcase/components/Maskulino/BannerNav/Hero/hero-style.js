import { makeStyles } from 'tss-react/mui';

const heroStyles = makeStyles({ uniqId: 'hero' })(theme => ({
  video: {
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    height: 500,
    width: '110%',
    '& iframe': {
      width: '100%',
      marginTop: -60,
      marginLeft: '-5%'
    },
    [theme.breakpoints.up('md')]: {
      height: 650,
    },
    background: theme.palette.common.black,
  },
  illustration: {
    width: '100%',
    height: 500,
  },
  particleBackground: {
    position: 'absolute',
    width: '100%',
    height: 500,
    top: 0,
    left: 0
  },
  slideshow: {
    height: '100%',
    width: '100%',
    '& > div': {
      height: '100%',
      width: '100%',
    }
  },
  slideItem: {
    height: 500,
    width: '100%'
  },
  img: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroStyles;
