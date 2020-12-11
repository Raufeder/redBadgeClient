import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/auth/Login';
import RegisterComponent from './components/auth/Register';
import DeleteAccountComponent from "./components/auth/DeleteAccount";
import NavbarComponent from './components/app/Navbar';
import HomePageComponent from './components/app/HomePage';
import RouteComponent from './components/app/RouteList';
import UserListComponent from './components/app/UserList';
import CreateRouteComponent from './components/app/AddRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUsername, setActiveUsername] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [activeRouteId, setActiveRouteId] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const activeUser = (username) => {
    setActiveUsername(username)
    setIsLoggedIn(true)
  }

  const activeUserId = (message) => {
    setActiveId(message)
  }

  const loggedOut = (placeholder) => {
    setIsLoggedIn(false)
  }

  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    setToken(token);
  }

  return (
    <BrowserRouter>
    <div className="App">
        <NavbarComponent isLoggedIn={isLoggedIn} activeUsername={activeUsername} loggedOut={loggedOut} token={token} admin={admin}/>
        <Switch>
          <Route exact path='/'>
            <HomePageComponent />
          </Route>
          <Route exact path="/user/login">
            <LoginComponent authenticateUser={authenticateUser} setActiveUsername={setActiveUsername} activeUser={activeUser} activeUserId={activeUserId} admin={admin} setAdmin={setAdmin}/>
          </Route>
          <Route exact path="/user/register">
            <RegisterComponent setActiveUsername={setActiveUsername} setActiveId={setActiveId} activeUser={activeUser} activeUserId={activeUserId}/>
          </Route>
          <Route exact path="/user/delete">
              <DeleteAccountComponent loggedOut={loggedOut} token={token} />
          </Route>
          <Route exact path='/routes'>
                <RouteComponent activeUsername={activeUsername} activeId={activeId} setActiveRouteId={setActiveRouteId} activeRouteId={activeRouteId} token={token} />
          </Route>
          <Route exact path='/admin/userlist'>
                <UserListComponent activeUsername={activeUsername} activeId={activeId} setActiveRouteId={setActiveRouteId} activeRouteId={activeRouteId} token={token} />
          </Route>
          <Route exact path='/admin/add/route'>
                <CreateRouteComponent activeUsername={activeUsername} activeId={activeId} setActiveRouteId={setActiveRouteId} activeRouteId={activeRouteId} token={token} />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

