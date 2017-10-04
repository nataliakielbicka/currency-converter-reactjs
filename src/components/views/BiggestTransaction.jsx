import React from "react";

const BiggestTransaction = ({maxValueName, maxElementEuro, maxElementPln}) => <div className="currency__max-transaction max-transaction">
  <h3 className="max-transaction__title">The biggest transaction(s)</h3>
  <h4 className="max-transaction__name">{maxValueName}</h4>
  <div className="max-transaction__amount">Amount in Euro:
    <span className="max-transaction__value">
      {maxElementEuro}</span>
  </div>
  <div className="max-transaction__amount">Amount in PLN:
    <span className="max-transaction__value">
      {maxElementPln}</span>
  </div>
</div>

export default BiggestTransaction;