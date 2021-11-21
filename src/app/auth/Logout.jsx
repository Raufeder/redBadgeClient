import React, { Component } from "react";
import {Button} from "reactstrap";
import '../../styles/Logout.css';

class LogoutComponent extends Component {
    logout = () => {localStorage.clear(this.props.token); this.props.loggedOut(); };

    render() { 
        return (
            <div>
                <Button className="customLogout" onClick={this.logout}>Logout</Button>
            </div>
        );
    }
};

export default LogoutComponent;