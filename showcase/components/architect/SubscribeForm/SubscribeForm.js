import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Parallax
        blur={0}
        bgImage={imgAPI.architect[15]}
        bgImageAlt="benefit"
        strength={300}
      >
        <div className={classes.parallaxWrap} />
      </Parallax>
      <Container fixed>
        <Paper className={classes.form}>
          <Typography variant="h4" className={text.title2}>
            {t('architect-landing.subscribe_title')}
          </Typography>
          <Typography className={text.subtitle2}>
            {t('architect-landing.subscribe_subtitle')}
          </Typography>
          <form>
            <TextField
              variant="standard"
              className={classes.field}
              fullWidth
              label={t('architect-landing.subscribe_input')}
              placeholder={t('architect-landing.subscribe_input')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" size="large" color="secondary" className={classes.button}>
              {t('architect-landing.subscribe_subscribe')}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default SubscribeForm;
