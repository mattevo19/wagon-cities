import React from 'react';
import { connect } from 'react-redux';

const City = (props) => {
  return (
    <li className="list-group-item">
      {props.city.name}
    </li>
  );
}

export default City;
// export default connect(mapStateToProps,???)(City);
