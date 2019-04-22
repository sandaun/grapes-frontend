import React, {Component} from "react";
// import SearchItem from "./SearchItem";

class WineList extends Component {

  handleItem = (item) => {
    console.log(`This is ${item} from Home`)
    console.log(this.props);
    this.props.handleItem(item);
  };

  render () {
    return (
      <>
        <div>This is WineList {this.props.item}</div>
      </>
    );
  }
}

export default WineList;
