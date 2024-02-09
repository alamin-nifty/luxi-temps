import { makeStyles } from 'tss-react/mui';
import crossDeco from '~/public/images/decoration/cross-deco-light.png';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: 720,
      marginBottom: theme.spacing(-30),
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(20),
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    width: 200,
    height: 200,
    left: theme.spacing(-4),
    top: theme.spacing(8),
    '& h3': {
      color: theme.palette.common.white,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(11),
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 200,
      height: 200,
      position: 'absolute',
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
      top: theme.spacing(-8),
      left: theme.spacing(10),
    },
    '&:after': {
      content: '""',
      width: 200,
      height: 200,
      position: 'absolute',
      background: `url(${crossDeco}) repeat 0px -30px`,
      backgroundSize: '100%',
      top: theme.spacing(-12),
      left: theme.spacing(5),
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: theme.spacing(15, 0, 0),
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
