import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'services' })(theme => ({
  root: {
    '& img': {
      width: '100%',
      height: '100%'
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
        fontSize: '1.2rem',
      }
    },
    '& p': {
      color: theme.palette.text.secondary,
    }
  },
  figure: {
    width: 180,
    height: 180,
    margin: '0 auto',
    position: 'relative',
    transform: 'scale(0.8)',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.5)',
      margin: '-36px auto -24px'
    },
    '& svg': {
      width: 180,
      height: 180,
    }
  },
  outline: {
    stroke: theme.palette.secondary.main
  },
  fill: {
    fill: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  grid: {
    textAlign: 'center'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
