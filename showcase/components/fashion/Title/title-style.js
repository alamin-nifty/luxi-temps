import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })(theme => ({
  left: {
    textAlign: 'left',
    '& h4': {
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
    }
  },
  right: {
    textAlign: 'right',
    '& h4': {
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
    }
  },
  center: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    display: 'inline-block',
    minWidth: 200,
    fontSize: 36,
    lineHeight: '56px',
    '& h4': {
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px',
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  primary: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0.5),
  },
  secondary: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0.5),
    background: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
