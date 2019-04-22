import React, {Component} from "react";
import SearchItem from "./SearchItem";

class Home extends Component {

  handleItem = (item, title) => {
    console.log(`This is ${item} from Home`)
    console.log(this.props);
    this.props.handleItem(item, title);
  };

  render () {
    return (
      <>
        <div>This is Home</div>
        <SearchItem title='Wine' handleItem={this.handleItem}/>
        <SearchItem title='Food'/>
        <SearchItem title='Grape'/>
      </>
    );
  }
}

export default Home;


