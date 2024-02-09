import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './feature-style';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={8}>
          <Grid item md={4} xs={12}>
            <i className={cx(classes.icon, 'ion-ios-world')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('fashion-landing.feature_title1')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('fashion-landing.feature_desc1')}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <i className={cx(classes.icon, 'ion-ribbon-b')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('fashion-landing.feature_title2')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('fashion-landing.feature_desc2')}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <i className={cx(classes.icon, 'ion-android-sync')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('fashion-landing.feature_title3')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('fashion-landing.feature_desc3')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Feature;
