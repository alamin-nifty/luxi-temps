import React, { useState } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PlayIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import Carousel from 'react-slick';
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import yt from '~/youtube';
import Title from '../Title';
import useStyles from './featured-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Featured() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 750,
    fade: true,
    arrows: false,
  };

  const [player, setPlayer] = useState([]);
  const [videoId, setVideoId] = useState('ZGn8kSV9gAA');
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = id => {
    if (yt.use) {
      setVideoId(id);
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('architect-landing.featured_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId={videoId}
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item lg={7} md={10} xs={12}>
            <div className={classes.videoCarousel}>
              <Carousel {...settings}>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[4]} alt="cover" />
                  <IconButton
                    className={classes.playBtn}
                    onClick={() => handleClickOpen('ZGn8kSV9gAA')}
                    size="large"
                  >
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[5]} alt="cover" />
                  <IconButton
                    className={classes.playBtn}
                    onClick={() => handleClickOpen('85V_u_R0zxM')}
                    size="large"
                  >
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[6]} alt="cover" />
                  <IconButton
                    className={classes.playBtn}
                    onClick={() => handleClickOpen('ZGn8kSV9gAA')}
                    size="large"
                  >
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[7]} alt="cover" />
                  <IconButton
                    className={classes.playBtn}
                    onClick={() => handleClickOpen('85V_u_R0zxM')}
                    size="large"
                  >
                    <PlayIcon />
                  </IconButton>
                </Paper>
              </Carousel>
            </div>
          </Grid>
          <Grid item lg={5} md={10} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-200}
              delay={300}
              duration={0.6}
            >
              <div>
                <Title
                  head={t('architect-landing.featured_title')}
                  desc={t('architect-landing.featured_subtitle')}
                />
                <Typography display="block" className={text.paragraph}>
                  {t('architect-landing.featured_desc1')}
                </Typography>
                <br />
                <Typography display="block" className={text.paragraph}>
                  {t('architect-landing.featured_desc2')}
                </Typography>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;
