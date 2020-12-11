import React, { useState } from "react";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import "../../styles/register.css";
import APIURL from "../../helpers/environment";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const triggerUsernameInputChange = (event) => setUsername(event.target.value);
  const triggerEmailInputChange = (event) => setEmail(event.target.value);
  const triggerPasswordInputChange = (event) => setPassword(event.target.value);
  const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

  const registerSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      if (password === passwordConfirm) {
        fetch(`${APIURL}user/register`, {
                method: 'POST',
                body: JSON.stringify({
                  user: {
                    username: username,
                    email: email,
                    password: password
                  }
                }),
                headers: new Headers ({
                    "Content-Type": "application/json"
                })
        })
          .then((response) => response.json())
          .then(() => {
            fetch(`${APIURL}user/login`, {
                        method: 'POST',
                        headers: {
                           "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          user: {
                            username: username,
                            email: email,
                            password: password
                          }
                        }),
                    })
                    .then(response => response.json())
                    .then((body) => {
                    
                    })
          })
          .catch((error) => console.log(error));
      } else {
        alert("Passwords MUST match!");
      }
    } else {
      alert("Must give Username and Password");
    }
  };

  return (
    <div className="authForm" id="registerForm">
      <Form className="mainLogin" onSubmit={registerSubmit}>
        <FormGroup>
          <Label htmlFor="registerUsername"></Label>
          <Input
            className="Input"
            placeholder="Username"
            onChange={triggerUsernameInputChange}
            value={username}
            id="registerUsername"
            type="text"
            name="regsterUsername"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="registerEmail"></Label>
          <Input
            className="Input"
            placeholder="Email"
            onChange={triggerEmailInputChange}
            value={email}
            id="registerEmail"
            type="email"
            name="regsterEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="registerPassword"></Label>
          <Input
            className="Input"
            placeholder="Password"
            onChange={triggerPasswordInputChange}
            value={password}
            id="registerPassword"
            type="password"
            name="registerPassword"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="registerConfirmPassword"></Label>
          <Input
            className="Input"
            placeholder="Confirm Password"
            onChange={triggerPasswordConfirmInputChange}
            value={passwordConfirm}
            id="registerConfirmPassword"
            type="password"
            name="registerConfirmPassword"
          />
        </FormGroup>
        <Button className="Button">Register</Button>
      </Form>
    </div>
  );
};

export default Register;
