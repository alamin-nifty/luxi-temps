import React, { useRef } from 'react';
import Carousel from 'react-slick';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import BackIcon from '@mui/icons-material/ArrowBackSharp';
import NextIcon from '@mui/icons-material/ArrowForwardSharp';
import Title from '../Title';
import SimpleThumbCard from '../Cards/SimpleThumb';
import useStyles from './all-categories-style';

const dataProducts = [
  {
    icon: 'ion-ios-heart',
    title: 'Romantic'
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi'
  },
  {
    icon: 'ion-ios-happy',
    title: 'commedy'
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes'
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions'
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood'
  },
  {
    icon: 'ion-ios-heart',
    title: 'Romantic'
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi'
  },
  {
    icon: 'ion-ios-happy',
    title: 'commedy'
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes'
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions'
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood'
  }
];

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};

export default function Feature() {
  const { classes, cx } = useStyles();
  const slider = useRef(null);
  const nextSlide = () => {
    slider.current.slickNext();
  };
  const prevSlide = () => {
    slider.current.slickPrev();
  };
  return (
    <div className={classes.root}>
      <Container className={classes.carouselContainer}>
        <Title align="center" primary="All" secondary="Categories" />
        <div className={classes.carouselWrap}>
          <Button className={cx(classes.nav, classes.prev)} onClick={prevSlide}>
            <BackIcon />
          </Button>
          <Button className={cx(classes.nav, classes.next)} onClick={nextSlide}>
            <NextIcon />
          </Button>
          <Carousel ref={slider} {...settings}>
            {dataProducts.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <SimpleThumbCard
                  title={item.title}
                  icon={item.icon}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
