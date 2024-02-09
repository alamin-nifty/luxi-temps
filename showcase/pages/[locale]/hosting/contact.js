import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/hosting/Forms/Contact';
// Theme Wrapper
import Hosting from '../../../components/wrapper/Hosting';

function Contact() {
  return (
    <Hosting pageName="Contact" isFull={false}>
      <ContactFrm />
    </Hosting>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
