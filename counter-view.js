import React from 'react';

module.exports = (props) => {
    const {number, handlePlus, handleMinus} = props;
    return (
        <div>
            <button onClick={ handlePlus }>Plus</button>
            <button onClick={ handleMinus }>Minus</button>
            <div id="count">Current number: { number }</div>
        </div>
    )
};
