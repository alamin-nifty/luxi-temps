import React from 'react';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import RegisterForm from '../../../components/education/Forms/Register';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

function Register() {
  return (
    <Education pageName="Register" isFull={false}>
      <RegisterForm />
    </Education>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Register;
