import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  counterWrap: {
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})` : `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    padding: theme.spacing(5, 0),
    borderRadius: theme.rounded.medium,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 140,
    }
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  counterItem: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
    },
    '& i': {
      fontWeight: theme.typography.fontWeightBold,
      marginRight: theme.spacing(2),
      fontSize: 64,
      lineHeight: '40px'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
