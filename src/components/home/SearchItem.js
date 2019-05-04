import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class SearchItem extends Component {
  state = {
    item: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { item } = this.state;
    const { title } = this.props;
    this.props.history.push(`/${title}/${item}`)
  }

  chooseItemList(title) {
    let itemArray = [];

    if (title === 'Food') {
      itemArray = ['Choose your food', 'orange', 'pork', 'tuna', 'salmon', 'steak'];
    }
    else if (title === 'Wine') {
      itemArray = ['Choose your wine', 'chardonnay', 'water', 'malbec', 'cabernet sauvignon', 'merlot'];
    }
    return itemArray;
  }

  render() {
    const { title } = this.props;
    const { item } = this.state;
    const itemArray = this.chooseItemList(title);
    return (
      <>
        <div>{title}</div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Choose your {title}</label>
          <select
            type="text"
            name="item"
            value={item}
            onChange={this.handleChange}
          >
            {itemArray.map((item,y) => <option key={y} value={item}>{item}</option>)}
          </select>
          {/* <input
            type="text"
            name="item"
            value={item}
            onChange={this.handleChange}
          /> */}
          <input type="submit" value="Go!" />
        </form>
      </>
    );
  }
}

export default withRouter(SearchItem);
