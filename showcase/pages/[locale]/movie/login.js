import React from 'react';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import LoginForm from '../../../components/movie/Forms/Login';
// Theme Wrapper
import Movie from '../../../components/wrapper/Movie';

function Login() {
  return (
    <Movie pageName="Login" isFull={false}>
      <div>
        <LoginForm />
      </div>
    </Movie>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Login;
