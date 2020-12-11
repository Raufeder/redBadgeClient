import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import APIURL from "../../helpers/environment";

const UserListComponent = (props) => {
    const [userList, setUserList] = useState([])
    useEffect(() => {
      const fetchUserList = () => {
        fetch(`${APIURL}/admin/userlist`, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              "Authorization": props.token
          },
        }).then(response => response.json())
        .then(data => {
          setUserList(data);
          console.log(data)
        }).catch(error => console.log(error));
      }
      fetchUserList()
    }, []);

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Type of User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UserListComponent;