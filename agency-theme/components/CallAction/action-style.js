import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'cta' })((theme) => ({
  root: {
    position: 'relative',
  },
  background: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(-50),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)'
  },
  button: {
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 64,
      fontSize: 18,
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto'
    }
  },
  paper: {
    padding: theme.spacing(4),
    border: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 1),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      fontFamily: 'Roboto Condensed',
      [theme.breakpoints.down('md')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
