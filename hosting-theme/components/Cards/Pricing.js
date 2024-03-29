import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import useStyles from './cards-style';

function Pricing(props) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const {
    title,
    price,
    img,
    featureList,
    desc,
    highlighted,
  } = props;
  return (
    <Paper className={cx(classes.pricing, highlighted && classes.highlighted)}>
      <div className={classes.title}>
        <Typography variant="h6">
          {title}
        </Typography>
        <img src={img} alt="img" />
        <Typography variant="h5">
          {price > 0 && '$'}
          {price > 0 ? (
            <Fragment>
              { price }
              <span>
                /mo
              </span>
            </Fragment>
          ) : 'Free'}
        </Typography>
        <Typography display="block" className={classes.desc}>
          {desc}
        </Typography>
      </div>
      <ul className={classes.feature}>
        {featureList.map((item, index) => (
          <li key={index.toString()}>
            {item.type === 'plus' ? (
              <span className={cx(classes.icon, classes.success)}>
                <i className="ion-ios-checkmark-circle-outline" />
              </span>
            ) : (
              <span className={cx(classes.icon, classes.error)}>
                <i className="ion-ios-close-circle-outline" />
              </span>
            )}
            {item.text}
          </li>
        ))}
      </ul>
      <div className={classes.btnArea}>
        <Button
          fullWidth
          variant="contained"
          color={highlighted ? 'secondary' : 'primary'}
          className={classes.button}
          size="large"
        >
          {t('hosting-landing.getstarted')}
        </Button>
      </div>
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  featureList: PropTypes.array.isRequired,
  desc: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
};

Pricing.defaultProps = {
  highlighted: false,
  img: '/images/hosting/home.png'
};

export default Pricing;
