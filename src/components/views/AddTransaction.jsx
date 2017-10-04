import React from "react";
import ValidationNameError from "./ValidationNameError";
import ValidationAmountError from "./ValidationAmountError";

const AddTransaction = ({
  name,
  amount,
  handleNameChange,
  handleAmountChange,
  addItem,
  validationNameError,
  validationAmountError
}) => <div className="currency__add-transation add-transaction">
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

export default AddTransaction;
