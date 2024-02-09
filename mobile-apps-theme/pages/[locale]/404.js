import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Error from '~/components/Error';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  dedicatedPage: {
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
}));

function ErrorPage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars } = props;
  const { t } = useTranslation('common');

  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>
            { brand.mobile.name + ' - ' + errorCode }
          </title>
        </Head>
        <div className={classes.dedicatedPage}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
          <Error errorCode={errorCode} text={t('404')} />
          <Footer invert />
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      {t('description')}
      Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default ErrorPage;