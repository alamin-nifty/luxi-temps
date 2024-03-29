import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({ uniqId: 'title' })(theme => ({
  title: {
    display: 'block',
    margin: theme.spacing(3, 0, 10),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 2, 10),
    },
    '& h2': {
      fontSize: '2.75rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem'
      },
    },
    '& p': {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      display: 'inline-block',
      position: 'relative',
      '& span': {
        background: '#21e2ed',
        display: 'inline-block',
        borderRadius: '50%',
        width: 10,
        height: 10,
        top: 8,
        left: -8,
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'relative',
          display: 'inline-block',
          background: '#217ced',
          borderRadius: '50%',
          width: 10,
          height: 10,
          top: -8,
          left: -7
        }
      }
    }
  },
  center: {
    textAlign: 'center'
  },
  left: {
    textAlign: 'left'
  },
}));

function Title(props) {
  const { classes, cx } = useStyles();
  const { subtitle, title, align } = props;
  return (
    <div className={cx(classes.title, align === 'left' ? classes.left : classes.center)}>
      <Typography component="p">
        <span />
        {subtitle}
      </Typography>
      <Typography variant="h2">
        {title}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  align: PropTypes.string
};

Title.defaultProps = {
  align: 'center'
};

export default Title;
