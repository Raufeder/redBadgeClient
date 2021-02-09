import React, { useState } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
    const[ isOpen, changeIsOpen ] = useState(false);
    const toggleNavbar = () => changeIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href='/' className="mr-auto">Climb Finder</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        {
                            props.isLoggedIn && props.admin===true  
                            ? (
                                <>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/admin/add/route'>Create a Route</Link>
                                    </NavItem>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/routes'>List of Routes</Link>
                                    </NavItem>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/admin/userlist'>List of users</Link>
                                    </NavItem>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/' onClick={props.loggedOut} token={props.token}>Logout</Link>
                                    </NavItem>
                                </>
                            ) 
                            : props.isLoggedIn ? (
                                <>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/routes'>Routes</Link>
                                    </NavItem>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/' onClick={props.loggedOut} token={props.token}>Logout</Link>
                                    </NavItem>
                                </>
                            )
                            : (
                                <>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/user/login'>Login</Link>
                                    </NavItem>
                                    <NavItem className= 'myButton' >
                                        <Link className= 'myButton' to='/user/register'>Register</Link>
                                    </NavItem>
                                </>
                            )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;