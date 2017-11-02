import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
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
        var number = this.state.number;

        return (
            <div>
                <button onClick={ this.handlePlus }>Plus</button>
                <button onClick={ this.handleMinus }>Minus</button>
                <div id="count">Current number: { this.state.number }</div>
            </div>
        )
    };
}

ReactDOM.render(
 <Counter/>,
 document.getElementById('main')
);
