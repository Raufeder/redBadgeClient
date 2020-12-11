import React, { useState } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
    const[ isOpen, changeIsOpen ] = useState(false);
    const toggleNavbar = () => changeIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href='/' className="mr-auto">Climber Tracker</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        {
                            props.isLoggedIn && props.admin===true  
                            ? (
                                <>
                                    <NavItem>
                                        <Link to='/admin/add/route'>Create a Route</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/routes'>List of Routes</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/admin/userlist'>List of users</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/' onClick={props.loggedOut} token={props.token}>Logout</Link>
                                    </NavItem>
                                </>
                            ) 
                            : props.isLoggedIn ? (
                                <>
                                    <NavItem>
                                        <Link to='/routes'>Routes</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/' onClick={props.loggedOut} token={props.token}>Logout</Link>
                                    </NavItem>
                                </>
                            )
                            : (
                                <>
                                    <NavItem>
                                        <Link to='/user/login'>Login</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/user/register'>Register</Link>
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