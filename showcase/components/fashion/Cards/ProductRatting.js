import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function ProductRatting(props) {
  const { i18n } = useTranslation('common');
  const { classes } = useStyles();
  const textStyle = useText();

  const curLang = '/' + i18n.language;

  const {
    img,
    ratting,
    text,
    price
  } = props;
  return (
    <div className={classes.productRatting}>
      <ButtonBase component="a" href={curLang + link.fashion.detail} className={classes.btnWrap}>
        <figure>
          <img src={img} alt={text} />
          <figcaption>Sale</figcaption>
        </figure>
        <div className={classes.ratting}>
          {[...Array(ratting)].map((e, index) => (
            <StarIcon className={classes.starIcon} key={index.toString()} />
          ))}
        </div>
        <Typography variant="h5">
          {text}
        </Typography>
        <Typography className={textStyle.subtitle2}>
          <strong>
            {price}
          </strong>
        </Typography>
      </ButtonBase>
    </div>
  );
}

ProductRatting.propTypes = {
  img: PropTypes.string.isRequired,
  ratting: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
