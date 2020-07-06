import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Haejin Bae. I'm a full stack engineer with experience in Express JS,  Node JS,  MongoDB, and React.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>I completed my degree in Bioengineering with a concentration of mechanics and materials at Lehigh University.</p>

            <p>Though having studied Bioengineering, my interests lies in web-development. The most appealing aspect of this field is that technology is always changing and dynamic.</p>

            <p>When I'm not working on refining my programming skills, you can find my playing the piano, playing tennis, hiking, or enjoying the company of others.</p>

            
            </Content> 
        </div>
    );

}

export default AboutPage;