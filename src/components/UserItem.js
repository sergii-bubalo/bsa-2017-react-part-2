import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        return (
            <li className="list-group-item clearfix">
            <div className="user-item">
                <span className="user-name">{ this.props.name }</span>
                <div className="pull-right">
                    <button className="user-delete btn btn-xs btn-danger img-circle" onClick={ this.props.delete }>&#xff38;</button>
                </div>
            </div>
            </li>
        )
    }
}

export default UserItem;
