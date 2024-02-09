import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ProfileCard from '../Cards/Profile';
import Title from '../Title';
import useStyles from './team-style';

const team = [
  {
    photo: imgAPI.architect[9],
    name: 'John Doe',
    title: 'chairman'
  },
  {
    photo: imgAPI.architect[10],
    name: 'jane Doe',
    title: 'Chief Executive Officer'
  },
  {
    photo: imgAPI.architect[11],
    name: 'James Doe',
    title: 'Chief Marketing Officer'
  },
  {
    photo: imgAPI.architect[12],
    name: 'Jihan Doe',
    title: 'Chief Operation Officer'
  },
  {
    photo: imgAPI.architect[13],
    name: 'Johan Doe',
    title: 'Senior Architect'
  },
  {
    photo: imgAPI.architect[14],
    name: 'Jena Doe',
    title: 'Senior Architect'
  },
];

function Featured() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUpShort"
          offset={-300}
          delay={200}
          duration={0.6}
        >
          <Title
            head={t('architect-landing.team_title')}
            desc={t('architect-landing.team_desc')}
          />
        </ScrollAnimation>
        <div className={classes.teamWrap}>
          <Grid container spacing={isMobile ? 2 : 6}>
            {team.map((item, index) => (
              <Grid item md={4} xs={6} key={index.toString()}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-50}
                  delay={200 + (100 * index)}
                  duration={0.3}
                >
                  <div>
                    <ProfileCard
                      photo={item.photo}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Featured;
