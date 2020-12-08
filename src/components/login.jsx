import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../styles/Login.css'
import APIURL from "../helpers/environment";

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                username: username, 
                password: password
            }}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            if(data.error){ console.log(data.error); }
            else{
                props.updateToken(data.sessionToken);
                props.fetchInfo(data.user.username);
            }
        })
     }

    return (
        <div >
          <Form className="mainLogin" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="Label" htmlFor="username"></Label>
                   <Input className="Input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} name="username" type="text" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label className="Label" htmlFor="email"></Label>
                   <Input className="Input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} name="email" type="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"></Label>
                    <Input className="Input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password}/>
                </FormGroup>
                <Button className="Button" type="submit">Let's Go</Button>
            </Form> 
         </div>
     )
    };

export default Login;