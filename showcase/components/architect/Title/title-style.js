import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  dark: {},
  desc: {},
  title: {
    display: 'inline-block',
    padding: theme.spacing(0, 2, 0, 4),
    borderLeft: `12px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(),
    },
    [`&.${classes.dark}`]: {
      borderLeftColor: theme.palette.common.white,
      '& h4': {
        color: theme.palette.common.white
      },
      [`& .${classes.desc}`]: {
        color: theme.palette.common.white
      }
    },
    [`& .${classes.desc}`]: {
      color: theme.palette.text.secondary,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
