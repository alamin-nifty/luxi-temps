import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './cards-style';

export default function SimpleThumb(props) {
  const { i18n } = useTranslation('common');
  const { classes } = useStyles();
  const curLang = '/' + i18n.language;

  const {
    icon,
    title,
  } = props;

  return (
    <ButtonBase component="a" href={curLang + link.movie.detail} className={classes.simpleThumb}>
      <div>
        <div className={classes.figure}>
          <span>
            <i className={icon} />
          </span>
        </div>
        <Typography className={classes.text}>{title}</Typography>
      </div>
    </ButtonBase>
  );
}

SimpleThumb.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
