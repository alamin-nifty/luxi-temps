import React from 'react';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import LoginForm from '../../../components/education/Forms/Login';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

function Login() {
  return (
    <Education pageName="Login" isFull={false}>
      <LoginForm />
    </Education>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Login;
