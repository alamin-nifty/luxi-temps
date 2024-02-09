import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import LoginFrm from '../../../components/crypto/Forms/Login';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function Login() {
  return (
    <Crypto pageName="Login" isFull={false}>
      <LoginFrm />
    </Crypto>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Login;
