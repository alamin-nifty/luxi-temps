import React, { Fragment } from 'react';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';
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

export default function Trending() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {!isMobile ? (
        <Fragment>
          <div className={classes.grid25}>
            <img src={imgAPI.fashion[8]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">Autumn Show</Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid50}>
            <img src={imgAPI.fashion[9]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">New Trending</Typography>
              <Typography variant="h3">2020</Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid25}>
            <img src={imgAPI.fashion[10]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">Man Collection</Typography>
            </ButtonBase>
          </div>
        </Fragment>
      ) : (
        <Carousel {...settings}>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.fashion[8]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">Autumn Show</Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid50}>
              <img src={imgAPI.fashion[9]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">New Trending</Typography>
                <Typography variant="h3">2020</Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.fashion[10]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">Man Collection</Typography>
              </ButtonBase>
            </div>
          </div>
        </Carousel>
      )}
    </div>
  );
}
