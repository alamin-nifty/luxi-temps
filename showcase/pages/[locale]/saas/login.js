import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import LoginFrm from '../../../components/saas/Forms/Login';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function Login() {
  return (
    <Saas pageName="Login" isFull={false}>
      <LoginFrm />
    </Saas>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Login;
