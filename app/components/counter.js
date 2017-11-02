import React from 'react'
import CounterView from './counter-view'

module.exports = class Counter extends React.Component {

    constructor(props) {
         super(props);
         this.handlePlus = this.handlePlus.bind(this);
         this.handleMinus = this.handleMinus.bind(this);

         this.state = {
             number: 42
         };
     }

     handlePlus() {
        this.setState({
            number: this.state.number + 1
        })
     }

     handleMinus() {
        this.setState({
            number: this.state.number - 1
        })
     }

    render() {
        return (
            <CounterView
                number={this.state.number}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
            />
        )
    };

}
