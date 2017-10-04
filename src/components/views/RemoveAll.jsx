import React, {Component} from "react";

export default class RemoveAll extends Component {
    render() {
        const {removeAll} = this.props;
        return (
            <a
                href="#remove"
                className="currency__remove-all"
                title="remove all"
                onClick={removeAll}>Remove all transactions</a>
        )
    }
}
