import React from 'react';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import RegisterForm from '../../../components/movie/Forms/Register';
// Theme Wrapper
import Movie from '../../../components/wrapper/Movie';

function Register() {
  return (
    <Movie pageName="Register" isFull={false}>
      <div>
        <RegisterForm />
      </div>
    </Movie>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Register;
