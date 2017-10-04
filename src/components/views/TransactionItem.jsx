import React from "react";

const TransactionItem = ({name, amount, pln, removeItem}) => <li className="transaction-list__item item">
  <span className="item__name">{name}</span>
  <span className="item__amount">Amount in Euro:
    <span className="item__value">{amount}</span>
  </span>
  <span className="item__amount">Amount in PLN:
    <span className="item__value">{pln}</span>
  </span>
  <button className="item__remove" onClick={removeItem}>x</button>
</li>

export default TransactionItem;