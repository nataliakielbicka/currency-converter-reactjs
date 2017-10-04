import React, {Component} from "react";
import PropTypes from "prop-types";

import ValidationNameError from "./ValidationNameError";
import ValidationAmountError from "./ValidationAmountError";

export default class AddTransaction extends Component {
  render() {
    const {
      name,
      amount,
      handleNameChange,
      handleAmountChange,
      addItem,
      validationNameError,
      validationAmountError
    } = this.props;
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
              value={name}
              onChange={handleNameChange}
              className="form__input"/>
          </div>
          <div className="form__col">
            <label htmlFor="transactionValue" className="form__label">Amount in Euro:</label>
            <input
              type="number"
              id="transactionValue"
              value={amount}
              onChange={handleAmountChange}
              className="form__input"/>
          </div>
          <button className="form__btn" onClick={addItem}>add transaction</button>
          <div className="form__errors">
            {validationNameError
              ? <ValidationNameError/>
              : null
}
            {validationAmountError
              ? <ValidationAmountError/>
              : null
}
          </div>
        </form>
      </div>
    )
  }
}
AddTransaction.propTypes = {
  name: PropTypes.string
};
