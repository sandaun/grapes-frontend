import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Edit from "./pages/EditProfile";
import Home from "./components/home/Home";
import FoodList from "./components/wine/FoodList";
import WineList from "./components/food/WineList";
import NotFound from "./components/NotFound";
import './app.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import FavFoodRecipes from "./components/wine/FavFoodRecipes";

toast.configure({
  autoClose: 3000,
})

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
            <PrivateRoute exact path="/favorites" component={FavFoodRecipes} />
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
