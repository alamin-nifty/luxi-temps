import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    padding: theme.spacing(10, 0, 5),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: 20
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0
    }
  },
  counterWrap: {
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      '&:before': {
        content: '""',
        width: 300,
        height: 250,
        position: 'absolute',
        left: -30,
        top: -30,
        background: theme.palette.secondary.main,
        opacity: 0.5,
      },
      '&:after': {
        content: '""',
        width: 150,
        height: 180,
        position: 'absolute',
        right: -120,
        top: 170,
        background: theme.palette.primary.main,
        opacity: 0.5
      },
    }
  },
  paper: {
    background: alpha(theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper, 0.7),
    backdropFilter: 'saturate(90%) blur(20px)',
    position: 'relative',
    zIndex: 20,
    padding: theme.spacing(15, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 3)
    }
  },
  text: {},
  counterItem: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& i': {
      color: theme.palette.primary.main,
      fontSize: 55,
      marginRight: theme.spacing(2),
      [theme.breakpoints.only('sm')]: {
        marginRight: 0
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
