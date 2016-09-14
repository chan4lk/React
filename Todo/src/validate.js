var CounterDisplay = React.createClass({
    render: function(){
        /** Calls the handler props once events are fired. */
        return <div>
            <div> {this.props.counterProp}</div>
            <br/>
            <button onClick={this.props.incrementCounter}>+</button>
            <button onClick={this.props.decrementCounter}>-</button>
        </div>;
    },
    /** Setup validation for each prop */
    propTypes:{
        /** Must be a number. */
        counterProp: React.PropTypes.number.isRequired,

        /** Must be functions */
        incrementCounter: React.PropTypes.func.isRequired,
        decrementCounter: React.PropTypes.func.isRequired
    }
});

var Counter = React.createClass({
    getInitialState: function(){
        return{
            counterProp : 0
        }
    },
    handleIncrement:function(){
        this.setState({counterProp: this.state.counterProp + 1});
    },
    handleDecrement:function(){
        this.setState({counterProp: this.state.counterProp - 1});
    },
    render:function(){
        return <div>
            <CounterDisplay 
                counterProp={this.state.counterProp} 
                incrementCounter={this.handleIncrement}
                decrementCounter={this.handleDecrement} />
        </div>;
    }
});

ReactDOM.render(
    <Counter/>,
    document.getElementById('container')
);