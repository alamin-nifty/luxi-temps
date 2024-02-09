import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/saas/Forms/Contact';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function Contact() {
  return (
    <Saas pageName="Contact" isFull={false}>
      <ContactFrm />
    </Saas>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
