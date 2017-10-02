import React, {Component} from "react";

export default class RemoveAll extends Component {
    render() {
        return (
            <a
                href="#"
                className="currency__remove-all"
                title="remove all"
                onClick={this.props.removeAll}>Remove all transactions</a>
        )
    }
}
