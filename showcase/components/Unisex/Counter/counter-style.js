import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  counterWrap: {
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative',
    background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    padding: theme.spacing(5, 0),
    '&:before': {
      background: theme.palette.mode === 'dark' ? theme.palette.background.default : '#EEEEEE',
      content: '""',
      borderRadius: theme.rounded.big,
      position: 'absolute',
      width: 'calc(100% - 2px)',
      height: 'calc(100% - 2px)',
      left: 1,
      top: 1
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
      background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginRight: theme.spacing(2),
      fontSize: 64,
      lineHeight: '40px'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
