import React from 'react';

import Card from '../components/Card';


import MealCornerIcon from '../assets/images/MealCornerIcon.png';
import logo from '../assets/images/logo.png';
import budget from '../assets/images/budget.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Meal Corner',
                    subTitle: 'The cookbook for developers',
                    imgSrc: MealCornerIcon,
                    link: 'https://mariacasby1.github.io/group6/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Progressive Budget',
                    subTitle: 'Budget Tracker',
                    imgSrc: budget,
                    link: 'https://salty-fortress-60446.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'TRACE ME',
                    subTitle: 'COVID-19 Trace Application',
                    imgSrc: logo,
                    link: 'https://trace-me-app.herokuapp.com/',
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

export default Carousel;