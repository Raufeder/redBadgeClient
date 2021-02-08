import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/addRoute.css'
import APIURL from "../../helpers/environment";

const CreateRouteComponent = (props) => {
    const [routeName, setRouteName] = useState("");
    const [routeType, setRouteType] = useState("");
    const [grade, setGrade] = useState("");
    const [keywords, setKeywords] = useState("");
    const [description, setDescription] = useState("");
    
    // useEffect(() => {
    //     fetchAddRouteList()
    // }, []);

    const fetchAddRouteList = (e) => {
      e.preventDefault()
        fetch(`${APIURL}admin/add/route`, {
          method: 'POST',
          body: JSON.stringify({
            route: {
              routeName: routeName,
              routeType: routeType,
              grade: grade,
              keywords: keywords,
              description: description
            }
          }),
          headers: new Headers ({
              "Content-Type": "application/json",
              "Authorization": props.token
          })
      }).then(response => response.text())
      .then((body) =>  {
        console.log(body)
        setRouteName('');
        setRouteType('');
        setGrade('');
        setKeywords('');
        setDescription('');
      }).catch(error => console.log(error));
    }

    return (
    <Form>
      <FormGroup>
        <Label for="exampleRouteName">Name of your Route</Label>
        <Input type="text" name="name" id="exampleRouteName" placeholder="Example Name" value={routeName} onChange={(e) => setRouteName(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Type of Route</Label>
        <Input type="select" name="select" id="Select Type" value={routeType} onChange={(e) => setRouteType(e.target.value)}>
          <option>Choose an option</option>
          <option>bouldering</option>
          <option>top rope</option>
          <option>lead climbing</option>
          <option>training</option>
          <option>comp style boulder</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Desired Grade</Label>
        <Input type="select" name="select" id="exampleSelect" value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option>Choose difficulty</option>
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
        <Input type="textarea" name="text" id="exampleText" value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description of Route</Label>
        <Input type="textarea" name="text" id="exampleText" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </FormGroup>
      <Button onClick={(event) =>fetchAddRouteList(event)}>Submit</Button>
    </Form>
    )
}

export default CreateRouteComponent