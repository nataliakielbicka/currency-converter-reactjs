import React, {Component} from "react";
import PropTypes from "prop-types";

import ValidationError from "./ValidationError";

export default class AddTransaction extends Component {
  render() {
    return (
      <div className="currency__add-transation add-transaction">
        <h2 className="add-transaction__title">Add Transaction</h2>
        <form className="add-transaction__form form">
          <div className="form__col">
            <label htmlFor="transactionName" className="form__label">Name:</label>
            <input
              type="text"
              name="transactionName"
              id="transactionName"
              value={this.props.name}
              onChange={this.props.handleNameChange}
              className="form__input"/>
          </div>
          <div className="form__col">
            <label htmlFor="transactionValue" className="form__label">Amount in Euro:</label>
            <input
              type="number"
              id="transactionValue"
              min="0"
              value={this.props.amount}
              onChange={this.props.handleAmountChange}
              className="form__input"/>
          </div>
          <button className="form__btn" onClick={this.props.addItem}>add transaction</button>
          {this.props.validationError
            ? <ValidationError/>
            : null
}
        </form>
      </div>
    )
  }
}
AddTransaction.propTypes = {
  name: PropTypes.string
};