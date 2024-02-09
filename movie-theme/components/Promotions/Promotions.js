import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Slider from 'dandelion-animated-slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.movie[1],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[2],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[3],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[5],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  }
];

function Promotion() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          autoplay={7500}
          className="slider-wrapper"
          previousButton={(
            <i className={cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
          nextButton={(
            <i className={cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={classes.item} key={index.toString()}>
              <div className={classes.innerBg}>
                <div className={classes.background}>
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
                <Grid container className={classes.row}>
                  <Grid item sm={7} xs={12}>
                    <div className={classes.text}>
                      <Typography variant="h4">
                        <span className={text.subtitle2}>{item.subtitle}</span>
                        {item.title}
                      </Typography>
                      <p className={classes.property}>
                        <span className={classes.star}>
                          {[...Array(item.rating)].map((e, indexStar) => (
                            <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                          ))}
                        </span>
                        5.0
                        <span className={classes.divider} />
                        {item.duration}
                      </p>
                      <article className={classes.desc}>
                        <Typography component="h6" className={text.paragraph}>
                          {item.desc}
                        </Typography>
                      </article>
                      <section className={classes.btnArea}>
                        <Button className={classes.btnText} color="secondary">
                          {t('movie-landing.promo_btn1')}
                        </Button>
                        <Button variant="contained" size="large" color="primary">
                          {t('movie-landing.promo_btn2')}
                        </Button>
                      </section>
                    </div>
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    {!isMobile && (
                      <div className={classes.image}>
                        <figure>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
