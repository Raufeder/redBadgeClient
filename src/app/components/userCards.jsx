import React from "react";
import '../../styles/UserCards.css';
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const UserCards = (props) => {
    const {username, email, userType} = props.character

    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle className= 'cardInfo' >Username: {username}</CardTitle>
                    <CardSubtitle className= 'cardInfo' >Email: {email}</CardSubtitle>
                    <CardText className= 'cardInfo' >Type of User: {userType}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCards;