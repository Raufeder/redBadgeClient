import React, { useState, useEffect } from 'react';
import {Table} from 'reactstrap';
import APIURL from '../../helpers/environment';

const RouteComponent = (props) => {
    const [routeList, setRouteList] = useState([])

    useEffect(() => {
        fetchRouteList()
    }, []);

    const fetchRouteList = () => {
      fetch(`${APIURL}/routes`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": props.token
        },
        body: JSON.stringify()
      }).then(response => response.json())
      .then(data => {
        setRouteList(data);
        console.log(data)
        return data;
      }).catch(error => console.log(error));
    }

    return (
        <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name of Route</th>
          <th>Type of Route</th>
          <th>Grade (Difficulty)</th>
          <th>Keywords</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
    )
}

export default RouteComponent