import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {pushUser} from "../actions/index";

class AddUserForm extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.pushUser(this.refs.userInput.value);
        this.refs.userInput.value = '';
    }

    render() {
        return (
            <div className="commentForm vert-offset-top-2">
                <div className="form-group">
                    <div className="col-md-8 col-md-offset-2">
                        <label htmlFor="user" className="control-label">User add</label>
                        <input
                            type="text"
                            id="user"
                            ref="userInput"
                            className="user-input form-control"
                            placeholder="Enter new user name"
                        />
                        <div className="row">
                            <div className="col-md-10 vert-offset-top-2 text-left">
                                <button className="user-btn-push btn btn-primary" onClick={ this.handleClick }>Push this
                                    user
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushUser }, dispatch)
}

const ConnectedAddUserForm = connect(mapStateToProps, mapDispatchToProps)(AddUserForm);

export default ConnectedAddUserForm;
