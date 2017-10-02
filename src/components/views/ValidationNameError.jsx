import React, {Component} from "react";

export default class ValidationNameError extends Component {
    render() {
        return (
            <span className="form__error">Please, fill in the name of a transaction.</span>
        )
    }
}
