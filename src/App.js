import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Wine from "./pages/Wine";
import Home from "./components/home/Home";
import FoodList from "./components/wine/FoodList";

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
            <AnonRoute path="/wine/:item" component={FoodList} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute path="/" component={Home} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
