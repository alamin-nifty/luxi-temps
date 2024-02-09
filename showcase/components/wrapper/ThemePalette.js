import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Hidden from '@mui/material/Hidden';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import PaletteIcon from '@mui/icons-material/PaletteOutlined';
import PageIcon from '@mui/icons-material/LibraryBooksOutlined';
import BackIcon from '@mui/icons-material/ArrowBack';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import imgAPI from '~/public/images/imgAPI';
import themeList from '~/theme/palette';
import useStyles from './palette-style';

const colorList = [
  'joker',
  'violeta',
  'burgundy',
  'purple',
  'violet',
  'passion',
  'roseGold',
  'vampire',
  'ubuntu',
  'gold',
  'deepBlue',
  'fresh',
  'mint',
  'oceanBlue',
  'cloud',
  'littleQueen',
  'smart',
  'botani',
  'money',
  'greenLeaf',
  'geenNature',
  'brown',
  'grayscale',
  'black',
];
function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ThemePalette(props) {
  const {
    changeColor,
    changeMode,
    changeDir,
    selectedColor,
    isDark,
    isRtl
  } = props;
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [tab, setTab] = useState(0);

  const defaultDir = isRtl === 'rtl';
  const defaultMode = isDark === 'dark';

  const [checkedDark, setCheckedDark] = useState(defaultMode);
  const [checkedRtl, setCheckedRtl] = useState(defaultDir);

  const handleToggleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggleOpenTheme = () => {
    setOpenDrawer(!openDrawer);
    setTab(0);
  };

  const handleToggleOpenExplore = () => {
    setOpenDrawer(!openDrawer);
    setTab(1);
  };

  const handleChangeTab = (event, selectedTab) => {
    setTab(selectedTab);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleCheckMode = () => {
    setCheckedDark(!checkedDark);
    changeMode();
  };

  const handleCheckRtl = () => {
    setCheckedRtl(!checkedRtl);
    changeDir(checkedRtl ? 'ltr' : 'rtl');
  };

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={handleClose}
        onOpen={handleToggleOpen}
        classes={{
          paper: classes.draweBg
        }}
      >
        <div className={classes.optWrap}>
          <AppBar position="fixed" color="default" classes={{ root: classes.appbar }}>
            <Hidden smUp>
              <IconButton onClick={handleClose}>
                <BackIcon />
              </IconButton>
            </Hidden>
            <Tabs value={tab} className={classes.tab} onChange={handleChangeTab} centered>
              <Tab label="Theme" iconPosition="start" icon={isDesktop ? <PaletteIcon /> : ''} classes={{ wrapper: classes.wrapper }} />
              <Tab label="Explore" iconPosition="start" icon={isDesktop ? <PageIcon /> : ''} classes={{ wrapper: classes.wrapper }} />
            </Tabs>
          </AppBar>
          <TabPanel value={tab} index={0}>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item sm={6} xs={12} className={classes.marginBottom}>
                    <Typography variant="h6">Theme Mode</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">Light</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedDark}
                          onChange={handleCheckMode}
                          value={checkedDark}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">Dark</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography variant="h6">Layout Direction</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">LTR</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedRtl}
                          onChange={handleCheckRtl}
                          value={checkedRtl}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">RTL</Typography>
                        <Typography variant="caption" component="p"><i>Best view in arabic</i></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeColor}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Color Combinations</Typography>
                <Grid container>
                  {colorList.map((clr, index) => (
                    <Grid key={index.toString()} item sm={3} xs={6}>
                      <Tooltip title={clr} placement="top">
                        <Button className={cx(classes.swatch, selectedColor === clr && classes.active)} onClick={() => changeColor(clr)}>
                          <span
                            className={classes.primary}
                            style={{
                              background: themeList[clr].palette.primary.main,
                              boxShadow: `0 0 0 6px ${themeList[clr].palette.primary.light}, 0 0 0 12px ${themeList[clr].palette.primary.dark}, rgba(0, 0, 0, 0.45) 0px 0px 6px 12px`
                            }}
                          >
                            &nbsp;
                          </span>
                          <span
                            className={classes.secondary}
                            style={{
                              background: themeList[clr].palette.secondary.main,
                              boxShadow: `0 0 0 4px ${themeList[clr].palette.secondary.light}, 0 0 0 8px ${themeList[clr].palette.secondary.dark}, rgba(0, 0, 0, 0.30) 0px 0px 5px 9px`
                            }}
                          >
                            &nbsp;
                          </span>
                        </Button>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </div>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <div className={classes.explore}>
              <ul>
                <li>
                  <a href="/medical" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[9]} alt="medical" />
                    </figure>
                    Medical
                  </a>
                </li>
                <li>
                  <a href="/movie" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[10]} alt="movie" />
                    </figure>
                    Movie
                  </a>
                </li>
                <li>
                  <a href="/education" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[11]} alt="education" />
                    </figure>
                    Education
                  </a>
                </li>
                <li>
                  <a href="/mobile-apps" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[6]} alt="mobile apps" />
                    </figure>
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="/saas" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[8]} alt="saas" />
                    </figure>
                    SaaS
                  </a>
                </li>
                <li>
                  <a href="/agency" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[1]} alt="agency" />
                    </figure>
                    Agency
                  </a>
                </li>
                <li>
                  <a href="/profile" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[7]} alt="agency" />
                    </figure>
                    Portfolio Profile
                  </a>
                </li>
                <li>
                  <a href="/cryptocurrency" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[3]} alt="crypto" />
                    </figure>
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a href="/fashion" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[4]} alt="fashion" />
                    </figure>
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="/hosting" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[5]} alt="hosting" />
                    </figure>
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a href="/architect" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[2]} alt="architect" />
                    </figure>
                    Interior Architect
                  </a>
                </li>
                <li>
                  <a href="/femine" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[13]} alt="femine" />
                    </figure>
                    Portfolio 2
                  </a>
                </li>
                <li>
                  <a href="/unisex" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[14]} alt="unisex" />
                    </figure>
                    Portfolio 3
                  </a>
                </li>
                <li>
                  <a href="/maskulino" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[15]} alt="maskulino" />
                    </figure>
                    Portfolio 4
                  </a>
                </li>
                <li>
                  <a href="https://ilhammeidi.github.io/luxinext-doc/" rel="noopener noreferrer" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[12]} alt="documentation" />
                    </figure>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </SwipeableDrawer>
      <div className={cx(classes.btn, openDrawer && classes.active)}>
        <IconButton onClick={handleToggleOpenTheme}>
          <PaletteIcon />
        </IconButton>
        <IconButton onClick={handleToggleOpenExplore}>
          <PageIcon />
        </IconButton>
      </div>
    </Fragment>
  );
}

ThemePalette.propTypes = {
  changeColor: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeDir: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  isDark: PropTypes.string.isRequired,
  isRtl: PropTypes.string.isRequired
};

export default ThemePalette;
