import React, { Component } from 'react';
import { connect } from 'react-redux';

import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map(city => <City city={city} key={city.name} />);
  }
  render() {
    return (
      <div className="cities list-group">
        {this.renderList()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}
export default connect(mapStateToProps)(CityList);
