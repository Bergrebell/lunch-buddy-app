import React from 'react';
import { connect } from 'react-redux';

// filter states from central redux store
const mapStateToPros = (state) => {
  return {
      number: state.number
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onPlusClick: () => dispatch({ type: 'NUMBER_INCREASE' }),
      onMinusClick: () => dispatch({ type: 'NUMBER_DECREASE' })
  }
};

const main = (props) => {
    const {number, onPlusClick, onMinusClick} = props;

    return (
        <div>
            <button onClick={ onPlusClick }>Plus</button>
            <button onClick={ onMinusClick }>Minus</button>
            <div id="count">Current number: { number }</div>
        </div>
    )
};

module.exports = connect(mapStateToPros, mapDispatchToProps)(main);
