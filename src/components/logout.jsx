import React, { Component } from "react";
import {Button} from "reactstrap";
import '../styles/Logout.css';

class Logout extends Component {
    logout = () => { localStorage.clear("sessionToken"); this.props.setIsLoggedIn(false); };

    render() {
        return (
            <div style={{position: "fixed", top: "10px", right: "50px", zIndex: "100"}}>
                <Button className="customLogout" onClick={this.logout}>Logout</Button>
            </div>
        );
    }
};

export default Logout;