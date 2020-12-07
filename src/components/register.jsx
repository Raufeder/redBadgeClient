import React, { useState } from "react";
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import '../styles/Register.css'
import APIURL from "../helpers/environment";

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const triggerUsernameInputChange = (event) => setUsername(event.target.value);
    const triggerPasswordInputChange = (event) => setPassword(event.target.value);
    const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

    const usernameAndPasswordValidator= (value) => {
        return ( value.length > 4 && (!(/^[A-Za-z0-9]+$/).test(value) || /([0-9]{1,})/.test(value)) );
    };

    const registerSubmit = (event) => {
        event.preventDefault();
        if(username && password){
            if( usernameAndPasswordValidator(username) && usernameAndPasswordValidator(password) ){
                if(password === passwordConfirm) {
                    fetch(`${APIURL}user/register`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ user: {
                            username: username,
                            password: password
                        }})
                    })
                    .then(response => response.json())
                    .then(() => {
                        alert ("User registered Successfully. Login to begin your journey!");
                    })
                    .catch(error => console.log(error));
                } else {
                    alert("Passwords MUST match!");
                }
            } else { alert("username and password must include a special character and a number and be at least {5} characters long!!"); }
        } 
    };



    return (
        <div className='authForm' id='registerForm'>
            <Form className="mainLogin" onSubmit={registerSubmit}>
                <FormGroup>
                    <Label htmlFor="registerUsername"></Label>
                    <Input className="Input" placeholder="Username" onChange={triggerUsernameInputChange} value={username} id="registerUsername" type="text" name="regsterUsername" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerPassword"></Label>
                    <Input className="Input" placeholder="Password" onChange={triggerPasswordInputChange} value={password} id="registerPassword" type="password" name="registerPassword" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerConfirmPassword"></Label>
                    <Input className="Input" placeholder="Confirm Password" onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} id="registerConfirmPassword" type="password" name="registerConfirmPassword" />
                </FormGroup>
                <Button className="Button">Register</Button>
            </Form>          
        </div>
    );
};

export default Register;