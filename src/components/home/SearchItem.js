import React, { Component } from "react";
import Wine from "../../lib/wine-service";

class SearchItem extends Component {
  state = {
    item: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { item } = this.state;
    const { title } = this.props;
    if (title === 'Wine') {
      Wine.search({ item });
    }
  }

  render() {
    const { title } = this.props;
    const { item } = this.state;
    return (
      <>
        <div>{title}</div>
        <form onSubmit={this.handleFormSubmit}>
          <label>MicroPatyManagement</label>
          <input
            type="text"
            name="item"
            value={item}
            onChange={this.handleChange}
          />
          <input type="submit" value="Go!" />
        </form>
      </>
    );
  }
}

export default SearchItem;
