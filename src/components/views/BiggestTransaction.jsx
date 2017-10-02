import React, {Component} from "react";

export default class BiggestTransaction extends Component {
  render() {
    return (
      <div className="currency__max-transaction max-transaction">
        <h3 className="max-transaction__title">The biggest transaction(s)</h3>
        <h4 className="max-transaction__name">{this.props.maxValueName}</h4>
        <div className="max-transaction__amount">Amount in Euro:
          <span className="max-transaction__value">
            {this.props.maxElementEuro}</span>
        </div>
        <div className="max-transaction__amount">Amount in PLN:
          <span className="max-transaction__value">
            {this.props.maxElementPln}</span>
        </div>
      </div>
    )
  }
}
