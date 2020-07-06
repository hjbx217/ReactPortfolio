import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

function ContactPage(prop) {

    return(
        <div>
            <Hero title={prop.title} subTitle={prop.subTitle} text={prop.text} />
            <Contact />
        </div>
    );

}

export default ContactPage;