import React from "react";

const ExchangeRate = ({exchangeRate}) => <h3 className="currency__exchange">1 EURO =
  <span className="currency__rate">
    {exchangeRate}</span>
  PLN</h3>

export default ExchangeRate;