import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import LocationIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react18';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import brand from '~/public/text/brand';
import logo from '~/public/images/architect-logo.svg';
import routeLink from '~/public/text/link';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import Checkbox from './Checkbox';
import Title from '../Title';

function BubleMark() {
  const { classes } = useStyles();
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +98 765 432 10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@luxi.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Lorem ipsum street Block C - Vestibullum Building
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;
  // eslint-disable-next-line
  const onMarkerClick = (props, marker) => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 37.759703,
        lng: -122.428093
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

function Contact() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.pageWrap}>
      {!isTablet && (
        <div className={classes.bgDeco} />
      )}
      <div className={classes.parallax}>
        <CrossParallax />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <a href={curLang + routeLink.architect.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.architect.projectName}
            </Typography>
          </a>
        </div>
      )}
      <Container maxWidth="lg" className={classes.innerWrap}>
        <IconButton
          href={curLang + routeLink.architect.home}
          className={classes.backtohome}
          size="large"
        >
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>
        <Grid container>
          <Grid item lg={1} xs={12} />
          <Grid item lg={5} xs={12} className={classes.wrapDeco}>
            {!isTablet && (
              <div className={classes.frmDeco} />
            )}
            <Paper className={cx(classes.formBox, 'fragment-fadeUp')}>
              <div className={classes.fullFromWrap}>
                <div className={classes.form}>
                  <Title
                    head="Contact Us"
                    desc={t('contact_subtitle')}
                  />
                  <ValidatorForm
                    onSubmit={handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label={t('form_name')}
                          variant="standard"
                          onChange={handleChange('name')}
                          name="Name"
                          value={values.name}
                          validators={['required']}
                          errorMessages={['This field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label={t('form_email')}
                          variant="standard"
                          onChange={handleChange('email')}
                          name="Email"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['This field is required', 'email is not valid']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          variant="standard"
                          label={t('form_phone')}
                          onChange={handleChange('phone')}
                          name="Phone"
                          value={values.phone}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          multiline
                          rows="6"
                          className={classes.input}
                          variant="standard"
                          label={t('form_message')}
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                        />
                      </Grid>
                    </Grid>
                    <FormControlLabel
                      className={classes.checkArea}
                      control={(
                        <Checkbox
                          validators={['isTruthy']}
                          errorMessages="This field is required"
                          checked={check}
                          value={check}
                          onChange={(e) => handleCheck(e)}
                          color="primary"
                        />
                      )}
                      label={(
                        <span className={text.paragraph}>
                          {t('form_terms')}
                          <br />
                          <a href="#">
                            {t('form_privacy')}
                          </a>
                        </span>
                      )}
                    />
                    <div className={classes.btnArea}>
                      <Button variant="contained" fullWidth={isMobile} type="submit" color="primary" size="large">
                        {t('form_send')}
                        <SendIcon className={classes.rightIcon} />
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
            {!isTablet && (
              <Paper className={classes.map} elevation={10}>
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '700px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
