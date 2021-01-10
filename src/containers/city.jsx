import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCity from '../actions/index';

const City = (props) => {
  const handleClick = () => {
    props.selectCity(props.city);
  };

  return (
    <li className="list-group-item" onMouseOver={handleClick}>{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
