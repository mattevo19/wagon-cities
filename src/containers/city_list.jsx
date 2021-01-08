import React, { Component } from 'react';
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
// export default connect(mapStateToProps,)(CityList);

export default CityList;
