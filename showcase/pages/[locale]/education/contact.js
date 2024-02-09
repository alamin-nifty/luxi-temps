import React from 'react';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/education/Forms/Contact';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

function Contact() {
  return (
    <Education pageName="Contact" isFull={false}>
      <ContactFrm />
    </Education>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
