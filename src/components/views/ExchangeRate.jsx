import React, {Component} from "react";

export default class ExchangeRate extends Component {
  render() {
    return (
      <h3 className="currency__exchange">1 EURO = <span className="currency__rate">
      {this.props.exchangeRate}</span> 
         PLN</h3>
    )
  }
}
