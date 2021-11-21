import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../../styles/Login.css";
import APIURL from "../../helpers/environment";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((body) => {
        props.authenticateUser(body.sessionToken);
        console.log(body);
        props.activeUser(username);
        props.activeUserId(body.message);
        if (body.user.userType === "admin") {
          props.setAdmin(true);
        } else {
          props.setAdmin(false);
        }
        console.log("Logged In");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form className="mainLogin" onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="Label" htmlFor="username">
            Username:
          </Label>
          <Input
            className="Input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label className="Label" htmlFor="email">
            Email:
          </Label>
          <Input
            className="Input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            className="Input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            autoComplete="on"
            value={password}
          />
        </FormGroup>
        <Button className="Button" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
