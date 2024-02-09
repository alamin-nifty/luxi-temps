import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import ArrowNext from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.fashion[1],
  },
  {
    image: imgAPI.fashion[2],
  },
  {
    image: imgAPI.fashion[3],
  },
  {
    image: imgAPI.fashion[4],
  },
];

function Promotion() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.sliderWrap}>
          <Slider
            autoplay={7500}
            className="slider-wrapper"
            previousButton={(
              <ArrowNext className={classes.arrowIcon} />
            )}
            nextButton={(
              <ArrowNext className={classes.arrowIcon} />
            )}
          >
            {sliderData.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <div className={classes.innerBg}>
                  <Grid container>
                    <Grid item sm={12} md={4}>
                      <div className={classes.text}>
                        {!isDesktop && (
                          <div className={classes.background}>
                            <figure>
                              <img src={item.image} alt={item.title} />
                            </figure>
                          </div>
                        )}
                        <Typography variant="h2" className={text.title}>
                          <span className={text.subtitle2}>{t('fashion-landing.promo_caption')}</span>
                          SALE
                        </Typography>
                        <Typography variant="h4" className={text.subtitle}>
                          {t('fashion-landing.promo_title')}
                        </Typography>
                        <article className={classes.desc}>
                          <Typography component="h6" className={text.paragraph}>
                            {t('fashion-landing.promo_desc')}
                          </Typography>
                        </article>
                        <Button variant="outlined" className={classes.button}>
                          {t('fashion-landing.promo_btn')}
                          <ArrowNext className={classes.iconBtn} />
                        </Button>
                      </div>
                    </Grid>
                    <Grid item sm={12} md={8}>
                      {!isTablet && (
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
      </Container>
    </div>
  );
}

export default Promotion;
