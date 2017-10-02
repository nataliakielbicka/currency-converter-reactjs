import React, {Component} from "react";

export default class ValidationAmountError extends Component {
    render() {
        return (
            <span className="form__error">The amount should be a number.</span>
        )
    }
}
