import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import logo from '~/public/images/architect-logo.svg';
import brand from '~/public/text/brand';
import useStyles from './footer-style';
import SelectLang from '../LangSwitch/Select';

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.architect.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props) {
  const { toggleDir } = props;
  const { classes } = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <Typography variant="h6" color="textPrimary">
              {brand.architect.projectName}
            </Typography>
          </div>
          <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
            Nam posuere accumsan porta. Integer sed ante tincidunt tincidunt sit amet sed libero.
          </Typography>
          <Copyright />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map(footer => (
              <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
                {isDesktop && (
                  <div>
                    <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <Accordion
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>
                        {footer.title}
                      </strong>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton aria-label="FB" className={classes.margin} size="small">
              <i className="ion-logo-twitter" />
            </IconButton>
            <IconButton aria-label="TW" className={classes.margin} size="small">
              <i className="ion-logo-facebook" />
            </IconButton>
            <IconButton aria-label="IG" className={classes.margin} size="small">
              <i className="ion-logo-instagram" />
            </IconButton>
            <IconButton aria-label="LI" className={classes.margin} size="small">
              <i className="ion-logo-linkedin" />
            </IconButton>
          </div>
          <SelectLang toggleDir={toggleDir} />
        </Grid>
      </Grid>
    </Container>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;