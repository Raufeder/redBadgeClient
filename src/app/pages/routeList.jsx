import React, { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import RouteCards from "../components/routeCards";
import APIURL from "../../helpers/environment";

const RouteComponent = (props) => {
  const [routeList, setRouteList] = useState([]);

  useEffect(() => {
    fetchRouteList();
  }, []);

  const fetchRouteList = () => {
    fetch(`${APIURL}routes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRouteList(data.routes);
      })
      .catch((error) => console.log(error));
  };

  function displayCards() {
    return routeList.map((result, index) => (
      <RouteCards key={index} character={result} />
    ));
  }

  return (
    <div>
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  );
};

export default RouteComponent;
