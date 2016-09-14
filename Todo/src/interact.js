var CounterDisplay = React.createClass({
    render: function () {
        /**
         * Calls the handler props once events are fired.
         */
        return <div>
            <div> {this.props.counterProp}</div>
            <button onClick={this.props.incrementCounter}>+</button>
            <button onClick={this.props.decrementCounter}>-</button>
        </div>;
    }
});

var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    getDefaultProps: function(){
        return{
            name: 'Counter'
        };
    },
    handleIncrement: function () {
        /** Update counter state */
        this.setState({ counter: this.state.counter + 1 });
    },
    handleDecrement: function(){
        /** Update counter state */
        this.setState({counter: this.state.counter - 1});
    },
    render: function () {
        /**
         * Pass down handlers to CounterDisplay component.
         */
        return <div>
            <h2>{this.props.name}</h2>
            <CounterDisplay
                counterProp={this.state.counter}
                incrementCounter={this.handleIncrement}
                decrementCounter={this.handleDecrement}>
            </CounterDisplay>
        </div>;
    }
});

ReactDOM.render(
    <div>
        <Counter name="Hello"/>
        <Counter/>
    </div>,
    document.getElementById('container')
);