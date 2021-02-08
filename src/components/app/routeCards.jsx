import React from 'react';
import '../../styles/routeCards.css';
import {Card, CardBody,CardTitle} from 'reactstrap';

const CardMorty = (props) => {
    const { routeName, routeType, grade, keywords, description  } = props.character

    return (
        <div>
            <Card>
                <CardBody className= 'cards' >
                    <CardTitle className= 'cardInfo' >Name of Route: {routeName}</CardTitle>
                    <CardTitle className= 'cardInfo' >Type of Route: {routeType}</CardTitle>
                    <CardTitle className= 'cardInfo' >Grade (Difficulty): {grade}</CardTitle>
                    <CardTitle className= 'cardInfo' >Keywords: {keywords}</CardTitle>
                    <CardTitle className= 'cardInfo' >Description:{description}</CardTitle>
                </CardBody>
            </Card>
        </div>);
}

export default CardMorty;