import { makeStyles } from 'tss-react/mui';

const teamStyles = makeStyles({ uniqId: 'team' })(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative',
    }
  },
  deco: {
    position: 'absolute',
    top: theme.spacing(-10),
    left: 0,
    height: 560,
    background: `linear-gradient(${theme.direction === 'rtl' ? '-160deg' : '160deg'}, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} 50%, ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 50%)`,
    width: '70%',
    [theme.breakpoints.down('lg')]: {
      height: 720,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default teamStyles;
