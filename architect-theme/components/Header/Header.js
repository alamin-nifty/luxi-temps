import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';
import routeLink from '~/public/text/link';
import logo from '~/public/images/architect-logo.svg';
import brand from '~/public/text/brand';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 100);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const {
    onToggleDark,
    onToggleDir,
    invert,
  } = props;

  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
    createData(navMenu[4], '#' + navMenu[4]),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          invert && classes.invert,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={!isMobile}>
          <Grid container>
            <Grid item sm={2} xs={7}>
              <div className={classes.logo}>
                { isMobile && (
                  <IconButton
                    onClick={handleOpenDrawer}
                    className={cx('hamburger hamburger--spring', classes.mobileMenu, openDrawer && 'is-active')}
                    size="large"
                  >
                    <span className="hamburger-box">
                      <span className={cx(classes.bar, 'hamburger-inner')} />
                    </span>
                  </IconButton>
                )}
                {invert ? (
                  <Link href="/">
                    <img src={logo} alt="logo" />
                    {isDesktop && brand.architect.projectName}
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                    {isDesktop && brand.architect.projectName}
                  </AnchorLink>
                )}
              </div>
            </Grid>
            <Grid item sm={isTablet ? 10 : 9} xs={5}>
              <div className={classes.headerContent}>
                <nav className={cx(classes.navMenu, invert && classes.invert)}>
                  {isDesktop && (
                    <Scrollspy
                      items={navMenu}
                      currentClassName="active"
                    >
                      {menuList.map(item => (
                        <li key={item.id.toString()}>
                          {invert ? (
                            // eslint-disable-next-line
                            <Button offset={item.offset || 0} href={'/' + item.url}>
                              {t('architect-landing.header_' + item.name)}
                            </Button>
                          ) : (
                            // eslint-disable-next-line
                            <Button component={LinkBtn} offset={item.offset || 0} href={item.url}>
                              {t('architect-landing.header_' + item.name)}
                            </Button>
                          )}
                        </li>
                      ))}
                      <li>
                        <Button href={curLang + routeLink.architect.contact}>
                          {t('architect-landing.header_contact')}
                        </Button>
                      </li>
                    </Scrollspy>
                  )}
                </nav>
                <nav className={classes.navMenu}>
                  <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
                </nav>
              </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default Header;
