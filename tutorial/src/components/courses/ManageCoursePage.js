import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render() {
        return (
            <h1>Manage Course</h1>
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};
    
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

  