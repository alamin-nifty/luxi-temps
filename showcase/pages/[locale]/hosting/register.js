import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import RegisterFrm from '../../../components/hosting/Forms/Register';
// Theme Wrapper
import Hosting from '../../../components/wrapper/Hosting';

function Register() {
  return (
    <Hosting pageName="Register" isFull={false}>
      <RegisterFrm />
    </Hosting>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Register;
