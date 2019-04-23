import React, { Component } from "react";
import SearchItem from "./SearchItem";

class Home extends Component {

  // handleItem = (item, title) => {
  //   console.log(`This is ${item} from Home`)
  //   this.props.handleItem(item, title);
  // };

  render () {
    return (
      <>
        <div>This is Home</div>
        <SearchItem title='Wine'/>
        <SearchItem title='Food'/>
        <SearchItem title='Grape'/>
      </>
    );
  }
}

export default Home;


