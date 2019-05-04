import React, { Component } from "react";
// import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";


class Home extends Component {

  // handleItem = (item, title) => {
  //   console.log(`This is ${item} from Home`)
  //   this.props.handleItem(item, title);
  // };

  render () {
    return (
      <>
        <div><h1>grapes</h1></div>
        <div><Link to={"/login"}>Log in</Link><br></br><Link to={"/signup"}> or Sign up</Link></div>


        <div><p>Pair Wine with Food </p><Link to={"/wine"}> Wine ME! </Link></div>
        <div><p>Pair Food with Wine </p><Link to={"/food"}> I'm Hungry </Link></div>
        
        {/* <SearchItem title='Wine'/>
        <SearchItem title='Food'/>
        <SearchItem title='Grape'/> */}
      </>
    );
  }
}

export default Home;


