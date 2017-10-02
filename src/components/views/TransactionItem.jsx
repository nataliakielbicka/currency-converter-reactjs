import React, {Component} from "react";

export default class TransactionItem extends Component {
  render() {
    return (
      <li className="transaction-list__item item">
        <span className="item__name">{this.props.name}</span>
        <span className="item__amount">Amount in Euro:
          <span className="item__value">{this.props.amount}</span>
        </span>
        <span className="item__amount">Amount in PLN:
          <span className="item__value">{this.props.pln}</span>
        </span>
        <button className="item__remove" onClick={this.props.removeItem}>x</button>
      </li>
    )
  }
}
