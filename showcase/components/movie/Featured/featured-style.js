import { makeStyles } from 'tss-react/mui';

const newProductsStyles = makeStyles({ uniqId: 'feature' })(theme => ({
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    top: 200,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newProductsStyles;
