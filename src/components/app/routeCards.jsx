import React from 'react';
import {Card, CardBody,CardTitle} from 'reactstrap';

const CardMorty = (props) => {
    const { routeName, routeType, grade, keywords, description  } = props.character

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{routeName}</CardTitle>
                    <CardTitle>{routeType}</CardTitle>
                    <CardTitle>{grade}</CardTitle>
                    <CardTitle>{keywords}</CardTitle>
                    <CardTitle>{description}</CardTitle>
                </CardBody>
            </Card>
        </div>);
}

export default CardMorty;