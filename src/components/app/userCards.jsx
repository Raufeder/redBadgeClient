import React from "react";
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
                    <CardTitle>{username}</CardTitle>
                    <CardSubtitle>{email}</CardSubtitle>
                    <CardText>{userType}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCards;