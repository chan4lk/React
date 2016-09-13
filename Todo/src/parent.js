var CounterDisplay = React.createClass({
    render: function(){
        return <div>{this.props.counterProp}</div>;
    }
});

var Counter = React.createClass({
    getInitialState: function(){
        return {
            counter: 0
        };
    },
    render: function () {
        /**
         * Child component rendered.
         * React will throw an error,
         * if the DOM doesn't have a single parent.
         * */
        return <div>
            <h2>{this.props.name}</h2>
            <CounterDisplay counterProp={this.state.counter}></CounterDisplay>
        </div>;

    }
});

ReactDOM.render(
    <Counter name={'Counter'} />,
    document.getElementById('container')
);