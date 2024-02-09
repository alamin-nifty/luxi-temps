import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import DotParallax from '../Parallax/Dots';
import Title from '../Title';
import GeneralCard from '../Cards/General';
import useStyle from './project-style';

const projectData = [
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
];

function Project() {
  const slider = useRef(null);
  const { t } = useTranslation('common');
  const lastSlide = Math.floor(projectData.length - 2);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  if(theme.direction === 'rtl') {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container>
        <div className={classes.floatingTitle}>
          <Title
            head={t('architect-landing.project_title')}
            desc={t('architect-landing.project_desc')}
          />
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.props, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {projectData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <GeneralCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.props, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
        </div>
        <IconButton
          className={cx(classes.nav, classes.prev)}
          onClick={() => slider.current.slickPrev()}
          size="large"
        >
          <i className="ion-ios-arrow-back" />
        </IconButton>
        <IconButton
          className={cx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
          size="large"
        >
          <i className="ion-ios-arrow-forward" />
        </IconButton>
      </div>
    </div>
  );
}

export default Project;
