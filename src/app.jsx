import React, { Component } from "react";
import { connect } from "react-redux";

import MathQuestion from "./math-question";
import ApiTest from "./api-test";
import { updateUsername } from "./redux/actions";
import "./app.css";

class App extends Component {
    render() {
        const { username } = this.props;

        return (
            <div className="app">
                <div className="title">
                    <div className="component-identifier">App Title Element</div>
                    Welcome: <span className="username">{username}</span>
                </div>
                <MathQuestion />
                <ApiTest />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.username
});

const mapDispatchToProps = dispatch => ({
    updateUsername: username => {
        dispatch(updateUsername(username));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
