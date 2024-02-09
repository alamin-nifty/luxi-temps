import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import RegisterFrm from '../../../components/crypto/Forms/Register';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function Register() {
  return (
    <Crypto pageName="Register" isFull={false}>
      <RegisterFrm />
    </Crypto>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Register;
