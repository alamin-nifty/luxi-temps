import { makeStyles } from 'tss-react/mui';

const blogStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-15)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h3': {
      marginBottom: theme.spacing(3),
    },
    '& h5': {
      marginBottom: theme.spacing(2),
    },
    '& nav': {
      width: 80,
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(-5),
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
      },
      '& button': {
        display: 'block',
        width: 40,
        height: 40,
        borderRadius: 0,
        padding: 0,
        background: theme.palette.secondary.dark,
        '& svg': {
          width: 40,
          height: 40,
          verticalAlign: 'middle',
          fill: theme.palette.common.white
        },
        '&:hover': {
          background: theme.palette.secondary.main
        },
      }
    }
  },
  next: {
    position: 'relative',
    marginLeft: theme.spacing(5)
  },
  readMore: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-1)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
