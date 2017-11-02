import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../store/modules/actions'


const mapStateToProps = (state) => {
  return {
      name: state.name
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: e => dispatch(changeName(e))

    }
};


const main = (props) => {
    var {name, onNameChange} = props;

    return (
      <div>
          <input type="text" value={name} onChange={ onNameChange } />
          <h3>Hello { name }!</h3>
      </div>
    )
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(main);
