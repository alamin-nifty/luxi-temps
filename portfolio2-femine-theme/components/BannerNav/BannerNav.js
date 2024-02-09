import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import ui from '~/theme/config';
import SideNavigation from '../SideNavigation';
import SideNavigationIcon from '../SideNavigation/SideNavigationIcon';
import Settings from '../Settings';
import Animation from './Hero/Animation';
import AnimationSlideshow from './Hero/AnimationSlideshow';
import Slideshow from './Hero/Slideshow';
import VideoHero from './Hero/Video';
import useStyles from './banner-style';

function BannerNav(props) {
  const { classes: text } = useText();
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const [bannerHero] = useState('video');

  const {
    onToggleDark,
    onToggleDir,
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item lg={ui.navigation === 'icon' ? 1 : 2} xs={12}>
          {!isTablet && (
            <Fragment>
              {ui.navigation === 'icon' && <SideNavigationIcon />}
              {ui.navigation === 'text' && <SideNavigation />}
            </Fragment>
          )}
        </Grid>
        <Grid item lg={ui.navigation === 'icon' ? 11 : 10} xs={12}>
          <div className={classes.banner}>
            <div className={classes.cover}>
              <div className={classes.figure}>
                { bannerHero === 'image' && <div className={classes.img} style={{ backgroundImage: `url(${brand.femine.cover})` }} /> }
                { bannerHero === 'video' && <VideoHero /> }
                { bannerHero === 'animation' && <Animation /> }
                { bannerHero === 'animation-slide' && <AnimationSlideshow /> }
                { bannerHero === 'slideshow' && <Slideshow /> }
                <div className={classes.overlay} />
              </div>
            </div>
            {!isTablet && (
              <div className={classes.settingIcon}>
                <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
              </div>
            )}
            <div className={classes.text}>
              <Typography variant="h4" className={text.title2}>
                {t('femine-landing.banner_greeting')}
                ,
              </Typography>
              <Typography variant="h2" className={text.title}>
                {t('femine-landing.banner_me')}
                &nbsp;Jena, UI Designer
              </Typography>
              {!isTablet && (
                <Fragment>
                  <Typography variant="h5" className={text.subtitle2}>
                    {t('femine-landing.banner_desc')}
                  </Typography>
                  <div className={classes.socmed}>
                    <Button variant="outlined" className={classes.download} component="a">Download CV</Button>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-instagram" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BannerNav;
