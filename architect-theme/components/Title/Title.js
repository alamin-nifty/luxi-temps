import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useText } from '~/theme/common';
import useStyles from './title-style';

export default function Title(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { head, desc, dark } = props;
  return (
    <div className={cx(classes.title, dark && classes.dark)}>
      <Typography variant="h4" className={text.title2}>
        {head}
      </Typography>
      <Typography className={cx(classes.desc, text.subtitle2)}>
        {desc}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string,
  dark: PropTypes.bool,
};

Title.defaultProps = {
  dark: false,
  desc: '',
};
