import React from "react";

const SumTransaction = ({totalAmountEuro, totalAmountPln}) => <div className="currency__total total">
  <div className="total__container">
    <h3 className="total__desc">Total sum of all transactions:</h3>
    <div className="total__amount">in Euro:
      <span className="total__value">{totalAmountEuro}</span>
    </div>
    <div className="total__amount">
      in PLN:
      <span className="total__value">
        {totalAmountPln}</span>
    </div>
  </div>
</div>

export default SumTransaction;
