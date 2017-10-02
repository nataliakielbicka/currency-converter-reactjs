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
      validationError: false
    }
    this.apiURL = "http://api.nbp.pl/api/exchangerates/tables/A/?format=json",
    // this.apiURL = 'http://api.nbp.pl/api/exchangerates/rates/A/978/?format=json'
    // //euro
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
    axios
      .get(this.apiURL)
      .then((res) => {
        const apiExchangeRate = res.data[0].rates[7].mid;
        //const apiExchangeRate = res.data.rates[0].mid;
        this.setState({exchangeRate: apiExchangeRate});
      });
  }
  handleNameChange(e) {
    let nameVal = e.target.value;
    this.setState({name: nameVal, validationError: false})
  }
  handleAmountChange(e) {
    let amountVal = e.target.value;
    this.setState({
      amount: + amountVal
    })
  }
  add(e) {
    e.preventDefault();
    let nameVal = document
      .getElementById("transactionName")
      .value;
    const nameValidator = new RegExp("^[a-zA-Z ]+$");
    const isNameValid = nameValidator.test(nameVal);
    const newList = [
      {
        name: this.state.name,
        amount: this.state.amount,
        pln: + (this.state.amount * this.state.exchangeRate).toFixed(2)
      },
      ...this.state.list
    ]
    isNameValid && this.state.amount != 0
      ? this.setState({list: newList, name: "", amount: ""})
      : this.setState({validationError: true, name: "", amount: ""});
    let updatedList = this.state.list;
    updatedList = newList;
    if (isNameValid && this.state.amount != 0) {
      this.setState({storedList: updatedList})
      this.updatedLocalStorage(updatedList)
    } else {
      this.setState({validationError: true, name: "", amount: ""});
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
    return (
      <div className="currency">
        <Title/>
        <ExchangeRate exchangeRate={this.state.exchangeRate}/>
        <AddTransaction
          addItem={this.add}
          name={this.state.name}
          amount={this.state.amount}
          pln={this.state.pln}
          handleNameChange={this.handleNameChange}
          handleAmountChange={this.handleAmountChange}
          list={this.state.list}
          validationError={this.state.validationError}/>
        <TransactionList
          list={this.state.list}
          removeListItem={this.remove}
          removeAll={this.removeAll}/>
        <Footer/>
      </div>
    );
  }
}