import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import brand from '~/public/text/brand';
import routeLink from '~/public/text/link';
import logo from '~/public/images/hosting-logo.svg';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';

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
  const isMobile2 = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 200),
    createData(navMenu[1], '#' + navMenu[1], 70),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3], 80),
    createData(navMenu[4], '#' + navMenu[4], 40),
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
          openDrawer && classes.openDrawer
        )}
      >
        <div className={classes.headerTop}>
          <Container fixed={isDesktop}>
            <div className={classes.logo}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              {invert ? (
                <a href={curLang + routeLink.hosting.home}>
                  <img src={logo} alt="logo" />
                  {brand.hosting.name}
                </a>
              ) : (
                <AnchorLink href="#home">
                  <img src={logo} alt="logo" />
                  {brand.hosting.name}
                </AnchorLink>
              )}
            </div>
            <nav className={classes.userMenu}>
              {!isTablet && (
                <Fragment>
                  <PhoneIcon />
                  +12 345 678 90
                  <Divider className={classes.divider} />
                  <Button href={curLang + routeLink.hosting.login}>
                    {t('hosting-landing.header_login')}
                  </Button>
                </Fragment>
              )}
              {!isMobile2 && (
                <Button href={curLang + routeLink.hosting.register} size="small" variant="contained" color="secondary" className={classes.button}>
                  {t('hosting-landing.header_register')}
                </Button>
              )}
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </Container>
        </div>
        {!isMobile && (
          <div className={classes.navigation}>
            <Container fixed>
              <nav className={classes.navMenu}>
                {invert ? (
                  <IconButton className={classes.icon} href={curLang + routeLink.hosting.home} size="large">
                    <HomeIcon />
                  </IconButton>
                ) : (
                  <IconButton className={classes.icon} href="#home" size="large">
                    <HomeIcon />
                  </IconButton>
                )}
                {isDesktop && (
                  <Scrollspy
                    items={navMenu}
                    currentClassName="active"
                  >
                    {menuList.map(item => (
                      <li key={item.id.toString()}>
                        {invert ? (
                          <Button offset={item.offset || 0} href={'/' + item.url}>
                            {t('hosting-landing.header_' + item.name)}
                          </Button>
                        ) : (
                          <Button component={LinkBtn} offset={item.offset || 0} href={item.url}>
                            {t('hosting-landing.header_' + item.name)}
                          </Button>
                        )}
                      </li>
                    ))}
                    <li>
                      <Button href={curLang + routeLink.hosting.contact}>
                        {t('hosting-landing.header_contact')}
                      </Button>
                    </li>
                  </Scrollspy>
                )}
              </nav>
            </Container>
          </div>
        )}
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
