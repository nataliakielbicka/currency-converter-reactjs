import React, {Component} from "react";
import TransactionItem from "./TransactionItem";
import SumTransaction from "./SumTransaction";
import BiggestTransaction from "./BiggestTransaction";
import RemoveAll from "./RemoveAll";

export default class TransactionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listItems = this
      .props
      .list
      .map((elem, i) => {
        return <TransactionItem
          key={i}
          name={elem.name}
          amount={elem.amount}
          pln={elem.pln}
          removeItem={this
          .props
          .removeListItem
          .bind(this, i)}/>
      });

    const maxElementEuro = Math
      .max
      .apply(Math, listItems.map(item => item.props.amount));
    const maxElementPln = Math
      .max
      .apply(Math, listItems.map(item => item.props.pln));
    const maxValueObject = listItems.filter(item => item.props.amount === maxElementEuro);
    const maxValueNameArr = maxValueObject.map(item => item.props.name);
    const maxValueName = maxValueNameArr.join(", ");

    function sumProperty(arr, type) {
      return arr.reduce((total, obj) => {
        return total + obj.props[type];
      }, 0);
    }
    let totalAmountEuro = sumProperty(listItems, "amount");
    let totalAmountPln = sumProperty(listItems, "pln").toFixed(2);
    return (
      <div className="currency__transaction-list transaction-list">
        <ul className="transaction-list__list">
          {listItems}
        </ul>
        {listItems.length
          ? (
            <div>
              <BiggestTransaction
                maxElementPln={maxElementPln}
                maxElementEuro={maxElementEuro}
                maxValueName={maxValueName}/>
              <SumTransaction
                totalAmountEuro={totalAmountEuro}
                totalAmountPln={totalAmountPln}/>
              <RemoveAll removeAll={this.props.removeAll}/>
            </div>
          )
          : null}
      </div>
    );
  }
}
