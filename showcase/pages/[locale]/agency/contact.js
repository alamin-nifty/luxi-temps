import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/agency/Forms/Contact';
import Decoration from '../../../components/agency/Forms/Decoration';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

function Contact() {
  return (
    <Agency pageName="Contact" isFull={false}>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Agency>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
