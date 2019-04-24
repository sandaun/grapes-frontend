import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Wine from "../../lib/wine-service";
// import SearchItem from "./SearchItem";

class FoodList extends Component {

  state = {
    foodList: [],
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Wine.search({ item }).then(( data ) => data.pairings);
    this.setState({
      foodList: search,
    })
  }

  render () {
    const { foodList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
        <div>This is foodList with {item} wines</div>
          <div>
              <ul>
                {foodList.map((food, index) => {
                  return <li key={index}>{food}</li>
                })}
              </ul>
          </div>
      </>
    );
  }
}

export default withRouter(FoodList);
