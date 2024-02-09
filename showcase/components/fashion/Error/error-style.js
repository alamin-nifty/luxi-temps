import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    background: theme.palette.primary.main,
    width: 206,
    height: 280,
    [theme.breakpoints.up('md')]: {
      marginTop: -120,
    },
    '& h1': {
      color: theme.palette.common.white,
      fontFamily: 'Roboto Condensed',
      textTransform: 'capitalize',
      fontWeight: 700,
      padding: theme.spacing(2),
      zIndex: 1,
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    '&:before': {
      content: '""',
      width: 320,
      height: 230,
      position: 'absolute',
      top: theme.spacing(-3),
      left: theme.spacing(-5),
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20),
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: 'Roboto Condensed',
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4),
    width: 205,
    borderColor: theme.palette.mode === 'dark' ? '#FFF' : theme.palette.primary.dark,
    color: theme.palette.mode === 'dark' ? '#FFF' : theme.palette.primary.dark
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
