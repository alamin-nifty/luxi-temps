import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ProfileCard from '../Cards/Profile';
import useTitle from '../Title/title-style';
import useStyles from './ask-doctors-style';

const categories = [
  'all',
  'Orthopedic',
  'Nutritionist',
  'Pediatric',
  'Anaesthestic'
];

const doctorsData = [
  {
    avatar: imgAPI.medical[7],
    name: 'Jena Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[12],
    name: 'John Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[8],
    name: 'Jihan Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[10],
    name: 'James Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[11],
    name: 'Jim Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[9],
    name: 'Jessy Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  }
];

function AskDoctors() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState('all');

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  const renderCard = (item, index) => (
    <ProfileCard
      key={index.toString()}
      name={item.name}
      title={item.title}
      avatar={item.avatar}
      rating={item.rating}
      exp={item.exp}
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item md={2} sm={9} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-100}
              delay={200}
              duration={0.3}
            >
              <div className={classes.sideFilter}>
                <Typography variant="h4" className={title.primary}>
                  {t('medical-landing.ask_doctors')}
                </Typography>
                <List component="nav">
                  {categories.map((item, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={cx(classes.filter, selectedIndex === item && classes.active)}
                      onClick={event => handleListItemClick(event, item)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={isDesktop ? 6 : 4}>
                {doctorsData.map((item, index) => (
                  <Grid item sm={6} xs={12} key={index.toString()}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={index * 200}
                      duration={0.4}
                    >
                      <div>
                        {renderCard(item, index)}
                      </div>
                    </ScrollAnimation>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AskDoctors;
