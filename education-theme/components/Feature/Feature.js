import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function Feature() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Title
          head={t('education-landing.feature_title')}
          desc={t('education-landing.feature_desc')}
          align="center"
          color="primary"
        />
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={100} afterAnimatedIn={handlePlay}>
          <div className={classes.counterWrap}>
            <Grid container spacing={isDesktop ? 8 : 2}>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/hd-video.svg" alt="hd-video" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      +
                      {countup(100, play)}
                      K
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('education-landing.counter_videos')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/presenter.svg" alt="presenter" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      +
                      {countup(200, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('education-landing.counter_mentors')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/money.svg" alt="money" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      $
                      {countup(500, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('education-landing.counter_save')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/unlimited.svg" alt="unlimited" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      Free
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('education-landing.counter_free')}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Feature;
