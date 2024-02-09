import React from 'react';
import { makeStyles } from 'tss-react/mui';
import PropTypes from 'prop-types';

const useStyles = makeStyles({ uniqId: 'bgdefault' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  }
}));

function BgDefault(props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.mainWrap}>
      { children }
    </div>
  );
}

BgDefault.propTypes = {
  children: PropTypes.node.isRequired
};

export default BgDefault;
