import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import YouTube from 'react-youtube';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import yt from '~/youtube';
import CrossParallax from '../Parallax/Cross';
import useStyles from './banner-style';

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3006'
    }
  };

  return (
    <div className={classes.root}>
      {!isMobile && play && (
        <IconButton className={classes.btnPlay} onClick={_onTogglePause} size="large">
          {playCtrl ? <PauseIcon /> : <PlayIcon />}
        </IconButton>
      )}
      <Container fixed={!isMobile} className={classes.bannerWrap}>
        <div className={classes.video}>
          <div className={classes.overlay} />
          {!play || isMobile ? <img src={imgAPI.architect[0]} alt="cover" /> : null}
          {yt.use && (
            <YouTube
              videoId="TA04Qau-UnA"
              opts={opts}
              onReady={_onReady}
              onEnd={_onEnd}
              onPlay={_onPlay}
            />
          )}
        </div>
        <div className={classes.parallax}>
          <CrossParallax />
        </div>
        <div className={classes.block}>
          <Grid container justifyContent="flex-end">
            <Grid item md={9} xs={12}>
              <div className={classes.paperWrap}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" className={text.title2}>
                    {t('architect-landing.banner_title')}
                  </Typography>
                  <Typography className={cx(classes.subtitle, text.subtitle2)}>
                    {t('architect-landing.banner_desc')}
                  </Typography>
                  <Button color="primary" size="large" variant="contained" className={classes.button}>
                    {t('architect-landing.banner_btn')}
                  </Button>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
