import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./app/auth/Login";
import RegisterComponent from "./app/auth/Register";
import DeleteAccountComponent from "./app/auth/DeleteAccount";
import NavbarComponent from "./app/components/navbar";
import HomePageComponent from "./app/pages/homePage";
import RouteComponent from "./app/pages/routeList";
import UserListComponent from "./app/pages/userList";
import CreateRouteComponent from "./app/pages/addRoute";
import Account from "./app/pages/Account";

//TODO Fix Navbar
//TODO Add delete user button
//TODO Add make admin button
//TODO Expand Account Component
//TODO Add account page with change password and such
//TODO Figure out Navbar Switcher

//TODO Make the app much better to look at
//TODO Make cards much nicer

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUsername, setActiveUsername] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [activeRouteId, setActiveRouteId] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [accountInfo, setAccountInfo] = useState({});

  const activeUser = (username) => {
    setActiveUsername(username);
    setIsLoggedIn(true);
  };

  const activeUserId = (message) => {
    setActiveId(message);
  };

  const loggedOut = (placeholder) => {
    setIsLoggedIn(false);
  };

  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    setToken(token);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent
          isLoggedIn={isLoggedIn}
          activeUsername={activeUsername}
          loggedOut={loggedOut}
          token={token}
          admin={admin}
        />
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
          </Route>
          <Route exact path="/user/login">
            <LoginComponent
              authenticateUser={authenticateUser}
              setActiveUsername={setActiveUsername}
              activeUser={activeUser}
              activeUserId={activeUserId}
              admin={admin}
              setAdmin={setAdmin}
            />
          </Route>
          <Route exact path="/user/register">
            <RegisterComponent
              setActiveUsername={setActiveUsername}
              setActiveId={setActiveId}
              activeUser={activeUser}
              activeUserId={activeUserId}
            />
          </Route>
          <Route exact path="/user/delete">
            <DeleteAccountComponent loggedOut={loggedOut} token={token} />
          </Route>
          <Route exact path="/routes">
            <RouteComponent
              activeUsername={activeUsername}
              activeId={activeId}
              setActiveRouteId={setActiveRouteId}
              activeRouteId={activeRouteId}
              token={token}
            />
          </Route>
          <Route exact path="/account">
            <div className="pageContainer">
              <Account
                setIsLoggedIn={setIsLoggedIn}
                accountInfo={accountInfo}
                userimg={accountInfo.url_userimage}
              />
            </div>
          </Route>
          <Route exact path="/admin/userlist">
            <UserListComponent
              activeUsername={activeUsername}
              activeId={activeId}
              setActiveRouteId={setActiveRouteId}
              activeRouteId={activeRouteId}
              token={token}
            />
          </Route>
          <Route exact path="/admin/add/route">
            <CreateRouteComponent
              activeUsername={activeUsername}
              activeId={activeId}
              setActiveRouteId={setActiveRouteId}
              activeRouteId={activeRouteId}
              token={token}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
