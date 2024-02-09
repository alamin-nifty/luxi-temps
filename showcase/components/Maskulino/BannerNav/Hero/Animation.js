import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useStyles from './hero-style';

function Animation() {
  const { classes } = useStyles();
  const theme = useTheme();

  useEffect(() => {
    if (window.VANTA !== undefined) {
      window.VANTA.WAVES({
        el: '#vanta_art',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: theme.palette.primary.main,
      });
    }
  }, []);

  return (
    <div className={classes.illustration} id="vanta_art" />
  );
}

export default Animation;
