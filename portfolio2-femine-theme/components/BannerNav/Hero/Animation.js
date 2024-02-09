import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import useStyles from './hero-style';

function Animation() {
  const { classes } = useStyles();

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setTimeout(() => {
        setVantaEffect(BIRDS({
          el: myRef.current,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 500,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1
        }))
      }, 2000)
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  return (
    <div className={classes.illustration} ref={myRef} />
  );
}

export default Animation;
