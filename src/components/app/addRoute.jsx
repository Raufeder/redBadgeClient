import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/addRoute.css'
import APIURL from "../../helpers/environment";

const CreateRouteComponent = (props) => {
    const [addRoute, setAddRoute] = useState([])
    
    useEffect(() => {
        fetchAddRouteList()
    }, []);

    const fetchAddRouteList = () => {
        fetch(`${APIURL}/admin/add/route`, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Authorization": props.token
          },
          // body: json.stringify(data)
      }).then(response => response.json())
      .then(data => {
        setAddRoute(data);
        console.log('Success', data)
      }).catch(error => console.log(error));
    }


    
    return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name of your Route</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="Example Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Type of Route</Label>
        <Input type="select" name="select" id="Select Type">
          <option>bouldering</option>
          <option>top rope</option>
          <option>lead climbing</option>
          <option>training</option>
          <option>comp style boulder</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Desired Grade</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>VB</option>
          <option>V0</option>
          <option>V1</option>
          <option>V2</option>
          <option>V3</option>
          <option>V4</option>
          <option>V5</option>
          <option>V6</option>
          <option>V7</option>
          <option>V8</option>
          <option>V9</option>
          <option>V10+</option>
          <option>5.6</option>
          <option>5.7</option>
          <option>5.8</option>
          <option>5.9</option>
          <option>5.10a</option>
          <option>5.10b</option>
          <option>5.10c</option>
          <option>5.10d</option>
          <option>5.11a</option>
          <option>5.11b</option>
          <option>5.11c</option>
          <option>5.11d</option>
          <option>5.12a</option>
          <option>5.12b</option>
          <option>5.12c</option>
          <option>5.12d</option>
          <option>5.13a</option>
          <option>5.13b</option>
          <option>5.13c</option>
          <option>5.13d</option>
          <option>5.14a</option>
          <option>5.14b</option>
          <option>5.14c</option>
          <option>5.14d</option>
          <option>5.15a</option>
          <option>5.15b</option>
          <option>5.15c</option>
          <option>5.15d</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Keywords for Route</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description of Route</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    )
}

export default CreateRouteComponent