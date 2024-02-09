import React, { useEffect } from 'react';
import useStyles from './hero-style';

function Animation() {
  const { classes } = useStyles();

  useEffect(() => {
    if (window.VANTA !== undefined) {
      window.VANTA.BIRDS({
        el: '#vanta_art',
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 500,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1
      });
    }
  }, []);

  return (
    <div className={classes.illustration} id="vanta_art" />
  );
}

export default Animation;
