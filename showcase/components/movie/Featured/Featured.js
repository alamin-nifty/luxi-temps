import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../Title';
import MovieThumbCard from '../Cards/MovieThumb';
import useStyles from './featured-style';

function Featured() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');
  const movieList = [
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[2]
    },
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[3]
    },
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[4]
    }
  ];
  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg fill="#cccccc">
          <use xlinkHref="/images/movie/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Box pt={isDesktop ? 5 : 0}>
              <Title primary="Featured" secondary="Movies" align={isMobile ? 'center' : 'left'} />
              <Typography align={isMobile ? 'center' : 'left'} className={text.paragrpah}>
                {t('movie-landing.new_desc')}
              </Typography>
            </Box>
          </Grid>
          {movieList.map((item, index) => (
            <Grid
              item
              key={index.toString()}
              md={3}
              sm={4}
              xs={12}
            >
              <MovieThumbCard
                img={item.thumb}
                text={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;
