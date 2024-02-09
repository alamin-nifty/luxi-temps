import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import YouTube from 'react-youtube';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyles from './banner-style';

function Banner() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const { t } = useTranslation('common');
  const { classes } = useStyles();

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
    }
  };

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
    height: '800',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'https://localhost:3010'
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <div className={classes.overlay} />
        {!play || isMobile ? <img src={imgAPI.movie[0]} alt="cover" /> : null}
        {yt.use && !isMobile && (
          <YouTube
            videoId="CK1ndZEkBcE"
            opts={opts}
            onReady={_onReady}
            onEnd={_onEnd}
            onPlay={_onPlay}
          />
        )}
        <div className={classes.caption}>
          <Container>
            {play && !isMobile && (
              <IconButton className={classes.btnPlay} onClick={_onTogglePause} size="large">
                <span>
                  <strong className={playCtrl ? classes.hidden : ''}>watch</strong>
                  <strong className={playCtrl ? classes.hidden : ''}>trailer</strong>
                  {playCtrl ? <i className="ion-ios-pause-outline" /> : <i className="ion-ios-play-outline" />}
                </span>
              </IconButton>
            )}
            <Grid container spacing={6}>
              <Grid item md={12} xs={12}>
                <Typography className={text.subtitle2}>Vivamus sit amet interdum elit</Typography>
                <Typography variant="h2" className={text.title}>Mancing Mania The Movie</Typography>
                <Typography className={text.subtitle}>
                  {t('movie-landing.banner_on_the')}
                  &nbsp;
                  01 . 11 . 20
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Banner;
