import React from 'react';
// Theme Components
import { makeStyles } from 'tss-react/mui';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/architect/Forms/Contact';
// Theme Wrapper
import Architect from '../../../components/wrapper/Architect';

const useStyles = makeStyles({ uniqId: 'contact' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
}));

function Contact() {
  const { classes } = useStyles();
  return (
    <Architect pageName="Contact" isFull={false}>
      <div className={classes.mainWrap}>
        <ContactFrm />
      </div>
    </Architect>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
