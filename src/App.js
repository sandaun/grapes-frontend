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
        <div>
          {/* <h1>Welcome to grapes!</h1> */}
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wine/:item" component={FoodList} />
            <Route exact path="/food/:item" component={WineList} />
            <PrivateRoute exact path="/update" component={Edit} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <Route path='*' exact={true} component={NotFound} />
            {/* <Route path="/wine" render={(props) => <SearchItem {...props} title='Wine' />}/> {/* THIS IS HOW TO PASS PROPS IN ROUTE */}
            {/* <Route path="/food" render={(props) => <SearchItem {...props} title='Food' />}/> */} */}
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
