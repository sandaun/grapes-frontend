import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
// import SearchItem from "./SearchItem";

class WineList extends Component {

  state = {
    wineList: [],
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Pairing.searchWine({ item }).then(( data ) => data.pairedWines);
    this.setState({
      wineList: search,
    })
  }

  render () {
    const { wineList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
        <div>{`This is wineList with ${item} ingredient`}</div>
          <div>
              <ul>
                {wineList.map((wine, index) => {
                  return <li key={index}>{wine}</li>
                })}
              </ul>
          </div>
      </>
    );
  }
}

export default withRouter(WineList);
