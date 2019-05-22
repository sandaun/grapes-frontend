import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Edit from "./pages/EditProfile";
import Home from "./components/home/Home";
import FoodList from "./components/wine/FoodList";
import WineList from "./components/food/WineList";
import NotFound from "./components/NotFound";
// import SearchItem from "./components/home/SearchItem";
import './app.css';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {

  state = {
    item: '',
    redirect: false
  }

  render() {
    return (
      <AuthProvider>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wine/:item" component={FoodList} />
            <Route exact path="/food/:item" component={WineList} />
            <PrivateRoute exact path="/update" component={Edit} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
