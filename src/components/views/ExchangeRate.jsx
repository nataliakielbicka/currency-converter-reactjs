import React, {Component} from "react";

export default class ExchangeRate extends Component {
  render() {
    const {exchangeRate} = this.props;
    return (
      <h3 className="currency__exchange">1 EURO = <span className="currency__rate">
      {exchangeRate}</span> 
         PLN</h3>
    )
  }
}
