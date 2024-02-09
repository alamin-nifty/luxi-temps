import React from 'react';
// Theme Components
import { makeStyles } from 'tss-react/mui';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import ContactFrm from '../../../components/mobile/Forms/Contact';
// Theme Wrapper
import Mobile from '../../../components/wrapper/Mobile';

const useStyles = makeStyles({ uniqId: 'contactpage' })(theme => ({
  mainWrap: {
    background: theme.palette.background.paper,
  },
}));

function Contact() {
  const { classes } = useStyles();
  return (
    <Mobile pageName="Contact" isFull={false}>
      <div className={classes.mainWrap}>
        <ContactFrm />
      </div>
    </Mobile>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
