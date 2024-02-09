import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './cards-style';

function MovieThumb(props) {
  const { classes } = useStyles();
  const {
    img,
    text,
  } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  return (
    <Paper className={classes.movieThumb}>
      <ButtonBase component="a" href={curLang + link.movie.detail} className={classes.btnWrap}>
        <figure>
          <i className="ion-ios-play play" />
          <img src={img} alt={text} />
          <figcaption>
            {t('movie-landing.featured_caption')}
          </figcaption>
        </figure>
        <Typography component="span" className={classes.text}>
          {text}
        </Typography>
      </ButtonBase>
    </Paper>
  );
}

MovieThumb.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MovieThumb;
