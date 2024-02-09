import React from 'react';
// Theme Components
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import RegisterFrm from '../../../components/saas/Forms/Register';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function Register() {
  return (
    <Saas pageName="Register" isFull={false}>
      <RegisterFrm />
    </Saas>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Register;
