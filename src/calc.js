import React, { Component } from "react";
class Calc extends Component {
constructor(props) {
    super(props);
    this.state = {
    value: 1,
    };

    this.minusValue = this.minusValue.bind(this);
    this.addValue = this.addValue.bind(this);
}

minusValue() {
    this.setState({ value: this.state.value - 1 });
}

addValue() {
    this.setState({ value: this.state.value + 1 });
}

render() {
    return (
    <div>
        <h1>The value is {this.state.value}</h1>
        <button onClick={this.addValue}> + </button>
        <button onClick={this.minusValue}> -</button>
    </div>
    );
}
}

export default Calc;
