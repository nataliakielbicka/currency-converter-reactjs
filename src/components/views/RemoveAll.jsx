import React from "react";

const RemoveAll = ({removeAll}) => <a
    href="#remove"
    className="currency__remove-all"
    title="remove all"
    onClick={removeAll}>Remove all transactions</a>

export default RemoveAll;