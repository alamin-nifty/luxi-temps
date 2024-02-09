import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../Title';
import ProductRattingCard from '../Cards/ProductRatting';
import useStyles from './new-products-style';

function NewProducts() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Title primary="New" secondary="Arrivals" align={isMobile ? 'center' : 'left'} />
            <Typography className={text.paragrpah}>
              {t('fashion-landing.new_desc')}
            </Typography>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[5]}
              ratting={4}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[6]}
              ratting={5}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[7]}
              ratting={5}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NewProducts;
