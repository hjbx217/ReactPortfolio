import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            {/* <Content>
            <p>Hello, my name is Haejin. I'm a full stack engineer with experience in AngularJS,  Node JS,  MongoDB, and React.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            

            
            </Content> */}
        </div>
    );

}

export default AboutPage;