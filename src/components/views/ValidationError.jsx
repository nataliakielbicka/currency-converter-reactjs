import React, {Component} from "react";

export default class ValidationError extends Component {
    render() {
        return (
            <span className="form__error">The name of transaction should be a non empty string and the amount should be greater than zero.</span>
        )
    }
}
