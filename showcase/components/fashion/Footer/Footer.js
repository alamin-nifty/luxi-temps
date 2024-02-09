import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/fashion-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import menu from '../Header/menu';
import useStyles from './footer-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {brand.fashion.footerText}
    </Typography>
  );
}

function Footer() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [value, setValue] = useState('');
  const { t } = useTranslation('common');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.subscribe}>
          <Typography variant="h5" className={text.subtitle}>
            {t('fashion-landing.subscribe_title')}
          </Typography>
          <div className={classes.form}>
            <form>
              <TextField
                variant="standard"
                className={classes.field}
                fullWidth
                placeholder={t('fashion-landing.subscribe_email')}
                onChange={(e) => handleChange(e)}
                value={value}
              />
              <Button className={classes.button}>
                {t('fashion-landing.subscribe_button')}
              </Button>
            </form>
          </div>
        </div>
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index.toString()}>
                <Link href={'#' + item} variant="subtitle1">
                  {t('fashion-landing.header_' + item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.socmed}>
          <IconButton aria-label="FB" className={classes.icon} size="small">
            <i className="ion-logo-twitter" />
          </IconButton>
          <IconButton aria-label="TW" className={classes.icon} size="small">
            <i className="ion-logo-facebook" />
          </IconButton>
          <IconButton aria-label="IG" className={classes.icon} size="small">
            <i className="ion-logo-instagram" />
          </IconButton>
        </div>
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
