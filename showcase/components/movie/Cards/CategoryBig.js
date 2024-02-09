import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function CategoryHalf(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const {
    img,
    title,
    background,
    total,
    type
  } = props;

  return (
    <div
      className={cx(classes.category, type === 'top-over' ? classes.halfChar : classes.fullChar)}
      style={{ backgroundColor: '#' + background }}
    >
      <img src={img} alt={title} className={classes.shadow} />
      <img src={img} alt={title} />
      <span className={classes.property}>
        <Typography component="span" className={cx(classes.title, text.title2)}>
          {title}
        </Typography>
        <Typography component="span" className={cx(classes.total, text.paragraph)}>
          {total}
          &nbsp;Items
        </Typography>
        {!isMobile && (
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className={classes.button}
          >
            Explore
          </Button>
        )}
      </span>
    </div>
  );
}

CategoryHalf.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
