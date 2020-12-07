import React, {useState} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import classnames from 'classnames';

import Login from "./Login";
import Register from "./Register";
import '../styles/TabSwitcher.css';

const TabSwitcher = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    let navItemStyle = { 
        backgroundColor: "#b6b6b6af", 
        width: "47%",
        borderRadius: "5px 5px 0px 0px", 
        color: "black",
        fontSize: "20px" };

    return (
        <div className="tabSwitcher">
            <Nav tabs>
                <NavItem 
                style={navItemStyle} >
                <NavLink 
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                    <p className="LoginText">Login</p>
                </NavLink>
                </NavItem >
                <div style={{ width: "6%" }}></div>
                <NavItem style={navItemStyle}>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                    <p className="LoginText">Register</p>
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Login fetchInfo={props.fetchInfo} updateToken={props.updateToken} setIsLoggedIn={props.setIsLoggedIn} />
                </TabPane>
                <TabPane tabId="2">
                    <Register />
                </TabPane>
            </TabContent>
        </div>
    )
};

export default TabSwitcher;