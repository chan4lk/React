import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.createRow = this.createRow.bind(this);
    }

    onTitleChanged(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave(event) {
       this.props.actions.createCourse(this.state.course); 
    }

    createRow(course, index){
        return <div key={index}> {course.title} </div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.createRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChanged}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(courseActions, dispatch) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
