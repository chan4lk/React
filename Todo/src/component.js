/** Extend React.Component */
class Comment extends React.Component {

    /** Creates a new instace of <see cref="Comment"> class. */
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    /**
     * Render method now a class member,
     * rather than object propery.
     */
    render() {
        return <h1>{this.props.name} - {this.state.counter}</h1>
    }
}

/** Validation */
Comment.propTypes = {
    name: React.PropTypes.string.isRequired
};

/** Deaults */
Comment.defaultProps = {
    name: 'Comment'
};

/** Render */
ReactDOM.render(<div><Comment name={'Comment'}/><Comment/> </div>, document.getElementById('container'));
