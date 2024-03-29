import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import NextIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.crypto[0],
    title: 'Sed imperdiet enim ligula',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[1],
    title: 'Fusce placerat enim et odio',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[2],
    title: 'Pellentesque ac bibendum tortor',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[3],
    title: 'Pellentesque ac bibendum tortor',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  }
];

function Promotion() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={cx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  {!isTablet && (
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/images/crypto/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  )}
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                    <section className={classes.time}>
                      <Typography component="h6">
                        {t('crypto-landing.promo_periode')}
                        :&nbsp;
                        {item.date}
                      </Typography>
                    </section>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
