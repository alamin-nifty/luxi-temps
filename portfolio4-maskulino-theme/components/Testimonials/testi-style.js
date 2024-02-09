import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  root: {
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    padding: theme.spacing(10, 0),
    position: 'relative',
    zIndex: 8
  },
  button: {},
  avatarWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  text: {
    paddingTop: theme.spacing(5),
    '& h3': {
      marginBottom: theme.spacing(3),
    },
    '& p': {
      marginBottom: theme.spacing(3),
      fontSize: 18,
      lineHeight: '32px',
    },
    [`& .${classes.button}`]: {
      minWidth: 160,
    },
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center'
    }
  },
  worldMap: {
    background: 'url(/images/maskulino/worldMap.png) no-repeat center center',
    backgroundSize: '100%',
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      height: 360,
      width: 580,
    }
  },
  person: {
    position: 'absolute',
  },
  avatar: {
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  dot: {
    borderRadius: '50%',
    display: 'block',
    width: 12,
    height: 12,
    background: theme.palette.secondary.main,
    border: '2px solid #FFF',
    boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  title: {
    color: theme.palette.common.white,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    width: 300,
    borderRadius: 0,
    background: 'none',
    boxShadow: 'none'
  },
  paperBlock: {
    color: theme.palette.common.white,
    background: theme.palette.secondary.main,
    padding: theme.spacing(3),
    marginBottom: 30,
    boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
    '& h6': {
      marginTop: theme.spacing(2),
      fontSize: 14,
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
      fontSize: 12,
    },
    '&:before': {
      content: '""',
      borderTop: `15px solid ${theme.palette.secondary.main}`,
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      position: 'absolute',
      left: 'calc(50% - 25px)',
      bottom: 15
    }
  },
  itemCarousel: {
    padding: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    '& avatar': {
      width: 30,
      height: 30
    }
  },
  name: {
    display: 'flex',
    marginTop: theme.spacing(),
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      marginLeft: theme.spacing()
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
