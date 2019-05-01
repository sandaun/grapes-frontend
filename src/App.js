import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Edit from "./pages/EditProfile";
import Home from "./components/home/Home";
import FoodList from "./components/wine/FoodList";
import WineList from "./components/food/WineList";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {

  state = {
    item: '',
    redirect: false
  }

  // handleItem = (item, title) => {
  //   console.log(`This is ${item} from APP`)
  //   this.setState({
  //     item: item,
  //   })
  //   if (title === 'Wine') {
  //     this.props.history.push('/wine');
  //   }
  // };

  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>title</h1>
          <Navbar />
          <Switch>
            <PrivateRoute path="/update" component={Edit} />
            <PrivateRoute path="/profile" component={Profile} />
            <AnonRoute path="/wine/:item" component={FoodList} />
            <AnonRoute path="/food/:item" component={WineList} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute path="/" component={Home} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
