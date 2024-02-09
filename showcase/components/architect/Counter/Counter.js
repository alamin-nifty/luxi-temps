import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import ParalaxBox from '../Parallax/Box';
import useStyles from './counter-style';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
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
        <div className={classes.counterWrap}>
          <ParalaxBox />
          <Paper className={classes.paper}>
            <Grid container justifyContent="center" alignItems="center" spacing={6}>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <i className="ion-ios-people-outline" />
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      {countup(20, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('architect-landing.counter_expert')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={4} xs={12} item>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={50}
                  afterAnimatedIn={handlePlay}
                >
                  <div className={classes.counterItem}>
                    <i className="ion-ios-briefcase-outline" />
                    <div className={classes.text}>
                      <Typography variant="h4" className={text.title}>
                        {countup(123, play)}
                      </Typography>
                      <Typography variant="h6" className={text.subtitle2}>
                        {t('architect-landing.counter_completed')}
                      </Typography>
                    </div>
                  </div>
                </ScrollAnimation>
              </Grid>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <i className="ion-ios-heart-outline" />
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      {countup(89, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('architect-landing.counter_happy')}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
