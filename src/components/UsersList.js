import React, { Component } from 'react';
import UserItem from './UserItem';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteUser} from "../actions/index";

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="well">
                <h1 className="vert-offset-top-0">Users:</h1>
                <div className="users-list">
                    <ul className="list-group">
                        {this.props.users.map(user =>
                            <UserItem
                                key={user.id}
                                name={user.name}
                                delete={() => this.props.deleteUser(user.id)}
                            />
                        )}
                    </ul>
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
    return bindActionCreators({ deleteUser }, dispatch)
}

const ConnectedUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default ConnectedUsersList;
