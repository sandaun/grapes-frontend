import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Wine from "./pages/Wine";
import Home from "./components/home/Home";
import WineList from "./components/wine/WineList";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

// import auth from "./lib/auth-service";

class App extends Component {

  // componentDidMount() {
  //   auth.test().then(data => console.log(data, 'hey, this is data from frontend grapes'))
  // }

  state = {
    item: '',
    redirect: false
  }

  handleItem = (item, title) => {
    console.log(`This is ${item} from APP`)
    this.setState({
      item: item,
    })
    if (title === 'Wine') {
    this.props.history.push('wine');
    }
  };

  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/wine" component={WineList} item={this.state.item} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute path="/" component={Home} handleItem={this.handleItem} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
