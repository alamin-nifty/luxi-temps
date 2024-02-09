import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './cards-style';

export default function ProductRatting(props) {
  const { classes } = useStyles();
  const { i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;
  const {
    img,
    title,
    price
  } = props;
  return (
    <ButtonBase component="a" href={curLang + link.fashion.detail} className={classes.simpleThumb}>
      <div>
        <figure>
          <img src={img} alt={title} />
        </figure>
        <Typography>{title}</Typography>
        <Typography>
          <strong>{price}</strong>
        </Typography>
      </div>
    </ButtonBase>
  );
}

ProductRatting.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
