import React, { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import UserCards from "../components/userCards";
import APIURL from "../../helpers/environment";

const UserListComponent = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch(`${APIURL}admin/userlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data.users);
      })
      .catch((error) => console.log(error));
    console.log(userList);
  };
  function showCards() {
    return userList.map((result, index) => (
      <UserCards key={index} character={result} />
    ));
  }

  return (
    <div>
      <CardColumns>{showCards()}</CardColumns>
    </div>
  );
};

export default UserListComponent;
