import React, { useEffect } from 'react';
import Carousel from 'react-slick';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './hero-style';

function AnimationSlideshow() {
  const { classes } = useStyles();
  const images = [imgAPI.femine[1], imgAPI.femine[2], imgAPI.femine[3], imgAPI.femine[4], imgAPI.femine[5]];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  };

  useEffect(() => {
    if (window.particlesJS !== 'undefined') {
      window.particlesJS('particles_background', {
        background: {
          color: '#333'
        },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#fff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5
              }
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className={classes.animationSlider}>
      <div className={classes.slideshow}>
        <Carousel {...settings}>
          {images.map((item, index) => (
            <div key={index.toString()} className={classes.slideItem}>
              <div className={classes.img} style={{ backgroundImage: `url(${item})` }} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={classes.particleBackground} id="particles_background" />
    </div>
  );
}

export default AnimationSlideshow;
