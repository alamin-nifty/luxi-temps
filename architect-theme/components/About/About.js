import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './about-style';

function About() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.bgDeco}>
        <img src={imgAPI.architect[8]} alt="3d home model" />
      </div>
      <Container fixed>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item md={7} xs={12}>
            <Title
              head={t('architect-landing.about_title')}
              dark
            />
            <Typography className={text.paragraph}>
              {t('architect-landing.about_desc')}
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} className={classes.illusWrap}>
            {!isTablet && (
              <div>
                <img src={imgAPI.architect[8]} alt="3d home model" className={classes.illustration} />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
