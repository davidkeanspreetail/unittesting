import React, { Component } from "react";
import axios from "axios";

import "./app.css";

class ApiTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResonse: "no"
        };

        this.getApiResponse = this.getApiResponse.bind(this);
    }

    componentDidMount() {
        this.getApiResponse();
    }

    getApiResponse() {
        return axios
            .get("https://yesno.wtf/api")
            .then(response => {
                this.setState({ apiResonse: response.data.answer });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { apiResonse } = this.state;
        const responseValidation = apiResonse === "yes" ? "valid" : "error";

        return (
            <div className="api-test">
                <div className="component-identifier">API Test Component</div>
                Response from yes/no API:
                <span className={`response-message ${responseValidation}`}>{apiResonse}</span>
            </div>
        );
    }
}

export default ApiTest;
