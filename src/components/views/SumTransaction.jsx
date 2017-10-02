import React, {Component} from "react";

export default class SumTransaction extends Component {
  render() {
    return (
      <div className="currency__total total">
        <div className="total__container">
          <h3 className="total__desc">Total sum of all transactions:</h3>
          <div className="total__amount">in Euro:
            <span className="total__value">{this.props.totalAmountEuro}</span>
          </div>
          <div className="total__amount">
            in PLN:
            <span className="total__value">
              {this.props.totalAmountPln}</span>
          </div>
        </div>
      </div>
    )
  }
}
