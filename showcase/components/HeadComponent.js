import React from 'react';
import { Head } from 'next/document';
import brand from '../public/text/brand';
import HeadProps from './HeadProperties';

const HeadComponent = () => (
  <Head>
    <meta name="description" content={brand.architect.desc} />
    <link rel="icon" href="/favicons/favicon.ico" />
    <HeadProps />
  </Head>
);

export default HeadComponent;
