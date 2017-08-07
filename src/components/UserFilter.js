import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {filterList} from "../actions/index";

class UserFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    filterList() {
        this.props.filterList(this.filterInput.value);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-8 vert-offset-top-2 col-md-offset-2">
                    <label htmlFor="filter" className="control-label">Users filter</label>
                    <input
                        type="text"
                        id="filter"
                        ref={(input) => {this.filterInput = input}}
                        className="user-input form-control"
                        onChange={this.filterList.bind(this)}
                        placeholder="Enter filter value"
                    />
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
    return bindActionCreators({ filterList }, dispatch)
}

const ConnectedUserFilter = connect(mapStateToProps, mapDispatchToProps)(UserFilter);

export default ConnectedUserFilter;