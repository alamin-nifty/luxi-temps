import { makeStyles } from 'tss-react/mui';

const contactStyles = makeStyles({ uniqId: 'contact' })(theme => ({
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
  },
  title: {
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(3),
      position: 'relative'
    },
    '& span': {
      display: 'block',
      color: theme.palette.secondary.main
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3)
    },
    '& label.Mui-focused': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0)
    },
    '& button': {
      [theme.breakpoints.down('lg')]: {
        width: '100%'
      },
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
