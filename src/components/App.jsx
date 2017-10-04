import React, {Component} from "react";
import axios from "axios";

import Title from "./views/Title";
import ExchangeRate from "./views/ExchangeRate";
import AddTransaction from "./views/AddTransaction";
import TransactionList from "./views/TransactionList";
import Footer from "./views/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeRate: 0,
      list: this.props.storedList,
      name: "",
      amount: "",
      pln: "",
      validationNameError: false,
      validationAmountError: false
    }
    this.add = this
      .add
      .bind(this);
    this.handleNameChange = this
      .handleNameChange
      .bind(this);
    this.handleAmountChange = this
      .handleAmountChange
      .bind(this);
    this.remove = this
      .remove
      .bind(this);
    this.removeAll = this
      .removeAll
      .bind(this);
  }
  componentWillMount() {
    let apiURL = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";
    axios
      .get(apiURL)
      .then((res) => {
        const apiExchangeRate = res.data[0].rates[7].mid;
        this.setState({exchangeRate: apiExchangeRate});
      });
  }
  handleNameChange(e) {
    let nameVal = e.target.value;
    this.setState({name: nameVal, validationNameError: false})
  }
  handleAmountChange(e) {
    let amountVal = e.target.value;
    this.setState({
      amount: + amountVal,
      validationAmountError: false
    })
  }
  add(e) {
    e.preventDefault();
    let nameVal = document
      .getElementById("transactionName")
      .value;
    let amountVal = document
      .getElementById("transactionValue")
      .value;
    const nameValidator = new RegExp("^[a-zA-Z ]+$");
    const amountValidator = new RegExp("^(?!0.)\\d+$");
    const isNameValid = nameValidator.test(nameVal);
    const isAmountValid = amountValidator.test(amountVal);
    const newList = [
      {
        name: this.state.name,
        amount: this.state.amount,
        pln: + (this.state.amount * this.state.exchangeRate).toFixed(2)
      },
      ...this.state.list
    ]
    if (isNameValid && isAmountValid) {
      this.setState({list: newList, name: "", amount: ""})
    } else if (isNameValid && !isAmountValid) {
      this.setState({validationAmountError: true, name: this.state.name, amount: ""})
    } else if (!isNameValid && isAmountValid) {
      this.setState({validationNameError: true, name: "", amount: this.state.amount})
    } else {
      this.setState({validationNameError: true, validationAmountError: true, name: "", amount: ""})
    }
    let updatedList = this.state.list;
    updatedList = newList;
    if (isNameValid && isAmountValid) {
      this.setState({storedList: updatedList})
      this.updatedLocalStorage(updatedList)
    }
  }
  remove(index) {
    this.setState({
      list: this
        .state
        .list
        .filter((e, i) => i !== index)
    });
    let updatedList = this.state.list;
    updatedList = updatedList.filter((e, i) => i !== index);
    this.setState({storedList: updatedList});
    this.updatedLocalStorage(updatedList);
  }
  removeAll(e) {
    e.preventDefault();
    this.setState({list: []});
    let updatedList = this.state.list;
    updatedList = [];
    this.setState({storedList: updatedList});
    this.updatedLocalStorage(updatedList);
  }
  updatedLocalStorage(updatedList) {
    //console.log("task updated")
    localStorage.setItem("storedTasks", JSON.stringify(updatedList));
  }
  render() {
    const {
      exchangeRate,
      name,
      amount,
      pln,
      list,
      validationNameError,
      validationAmountError
    } = this.state
    return (
      <div className="currency">
        <Title/>
        <ExchangeRate exchangeRate={exchangeRate}/>
        <AddTransaction
          addItem={this.add}
          name={name}
          amount={amount}
          pln={pln}
          handleNameChange={this.handleNameChange}
          handleAmountChange={this.handleAmountChange}
          list={list}
          validationNameError={validationNameError}
          validationAmountError={validationAmountError}/>
        <TransactionList
          list={list}
          removeListItem={this.remove}
          removeAll={this.removeAll}/>
        <Footer/>
      </div>
    );
  }
}