import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import LoginFrm from '../../../components/hosting/Forms/Login';
// Theme Wrapper
import Hosting from '../../../components/wrapper/Hosting';

function Login() {
  return (
    <Hosting pageName="Login" isFull={false}>
      <LoginFrm />
    </Hosting>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Login;
