import { makeStyles } from 'tss-react/mui';

const newProductsStyles = makeStyles({ uniqId: 'product' })(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newProductsStyles;
