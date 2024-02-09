import React, { Fragment } from 'react';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './trending-style';

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000
};

function Trending() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {!isTablet ? (
        <Fragment>
          <div className={classes.grid25}>
            <img src={imgAPI.movie[6]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">
                {t('movie-landing.trending_rent')}
              </Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid50}>
            <img src={imgAPI.movie[7]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h3">
                <i className="ion-ios-cafe" />
                FREE
                <span>Movies</span>
              </Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid25}>
            <img src={imgAPI.movie[8]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">
                {t('movie-landing.trending_episodes')}
              </Typography>
            </ButtonBase>
          </div>
        </Fragment>
      ) : (
        <Carousel {...settings}>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[6]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                  {t('movie-landing.trending_rent')}
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid50}>
              <img src={imgAPI.movie[7]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h3">
                  <i className="ion-ios-cafe" />
                  FREE
                  <span>Movies</span>
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[8]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                  {t('movie-landing.trending_episodes')}
                </Typography>
              </ButtonBase>
            </div>
          </div>
        </Carousel>
      )}
    </div>
  );
}

export default Trending;
