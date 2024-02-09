import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/crypto/Forms/Contact';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function Contact() {
  return (
    <Crypto pageName="Contact" isFull={false}>
      <ContactFrm />
    </Crypto>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
