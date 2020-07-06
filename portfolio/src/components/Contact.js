import React from 'react';
import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Linkedin',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/haejinbae/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: 'GitHub Profile',
                    imgSrc: github,
                    link: 'https://github.com/hjbx217?tab=repositories',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Contact;