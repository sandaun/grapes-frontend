import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Wine from "../../lib/wine-service";
// import SearchItem from "./SearchItem";

class WineList extends Component {

  state = {
    wineList: [],
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Wine.search({ item }).then(( data ) => data.recommendedWines);
    this.setState({
      wineList: search,
    })
  }

  render () {
    const { wineList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
        <div>This is WineList with {item} wines</div>
          <div>
              <ul>
                {wineList.map((wine, index) => {
                  return <li key={index}>{wine.title}</li>
                })}
              </ul>
          </div>
      </>
    );
  }
}

export default withRouter(WineList);
