import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

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

  chooseItemList(grape, food) {
    let itemArray = [];

    if (food === 'meat') {
      itemArray = ['duck', 'pork', 'steak'];
    }
    else if (food === 'cheese') {
      itemArray = ['parmesan', 'gouda', 'stilton'];
    }
    else if (food === 'rice') {
      itemArray = ['risotto', 'paella'];
    }
    else if (food === 'fish') {
      itemArray = ['calamari', 'octopus', 'crab'];
    }
    else if (food === 'cuisine') {
      itemArray = ['Italian', 'Spanish', 'Japanese', 'Chinese', 'Thai', 'Mexican', 'French', 'German'];
    }
    else if (food === 'dessert') {
      itemArray = ['chocolate', 'cake', 'stilton'];
    }
    else if (grape === 'red') {
      itemArray = ['syrah', 'malbec', 'cabernet sauvignon', 'merlot', 'pinot noir', 'grenache'];      
    }
    else if (grape === 'white') {
      itemArray = ['chardonnay', 'chablis', 'sauvignon blanc', 'pinot grigio', 'riesling', 'gewurztraminer'];
    }
    return itemArray;
  }

  render() {
    const { title, grape, food } = this.props;
    // const { item } = this.state;
    const itemArray = this.chooseItemList(grape, food);
    return (
      <>
        {itemArray.map((item, index) => <ListGroup key={index} variant='flush'>
          <ListGroup.Item>
            <Link to={`/${title}/${item}`} className="searchitem-links">{item}</Link>
          </ListGroup.Item>
        </ListGroup>)}
      </>
    );
  }
}

export default withRouter(SearchItem);
