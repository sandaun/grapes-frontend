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

  chooseItemList(title, grape) {
    let itemArray = [];

    // if (title === 'Food') {
    //   itemArray = ['Choose...', 'orange', 'pork', 'tuna', 'salmon', 'steak'];
    // }
    // else if (title === 'Wine') {
    //   itemArray = ['Choose...', 'chardonnay', 'water', 'malbec', 'cabernet sauvignon', 'merlot'];
    // }
    if (grape === 'red') {
      itemArray = ['Choose...', 'syrah', 'malbec', 'cabernet sauvignon', 'merlot', 'pinot noir', 'grenache'];      
    }
    else if (grape === 'white') {
      itemArray = ['Choose...', 'chardonnay', 'chablis', 'sauvignon blanc', 'pinot grigio', 'riesling', 'gewurztraminer'];
    }
    return itemArray;
  }

  render() {
    const { title, grape } = this.props;
    const { item } = this.state;
    const itemArray = this.chooseItemList(title, grape);
    return (
      <>
        {/* <div>{title}</div> */}
        <form onSubmit={this.handleFormSubmit}>
          <label>{title}</label>
          <select
            type="text"
            name="item"
            value={item}
            onChange={this.handleChange}
          >
            {itemArray.map((item,y) => <option key={y} value={item}>{item}</option>)}
          </select>
          <input type="submit" value="Go!" />
        </form>
      </>
    );
  }
}

export default withRouter(SearchItem);
