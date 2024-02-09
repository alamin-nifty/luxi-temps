import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function General(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    desc
  } = props;
  return (
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <Paper className={classes.desc}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography className={text.paragraph}>
          {desc}
        </Typography>
        <Button className={classes.button} color="secondary" size="small" variant="contained">
          See Detail
        </Button>
      </Paper>
    </Paper>
  );
}

General.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
