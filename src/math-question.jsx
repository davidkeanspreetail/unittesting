import React, { Component } from "react";
import "./app.css";

class MathQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            validationMessage: "",
            validationClass: "valid"
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValueChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit() {
        const { inputValue } = this.state;
        if (parseInt(inputValue, 10) === 4) {
            this.setState({ inputValue: "", validationMessage: "Correct!", validationClass: "valid" });
        } else {
            this.setState({ inputValue: "", validationMessage: "Incorrect!", validationClass: "error" });
        }
    }

    render() {
        const { inputValue, validationClass, validationMessage } = this.state;

        return (
            <div className="math-question">
                <div className="component-identifier">Math Question Component</div>
                <div>
                    <div>What is 2 + 2 ?</div>
                    <input id="math-input" value={inputValue} onChange={event => this.handleValueChange(event)} />
                    <button id="submit-btn" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
                <div className={`validation-message ${validationClass}`}>{validationMessage}</div>
            </div>
        );
    }
}

export default MathQuestion;
