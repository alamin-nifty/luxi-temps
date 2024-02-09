import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDeco() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            translateY={[-40, 40]}
            className="figure"
          >
            <svg
              fill="#cccccc"
              width={845}
              height={1099}
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxDot
                )
              }
            >
              <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-50, 50]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxCircle
                )
              }
            >
              <img src="/images/showcase/deco-circle.svg" alt="deco" />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
