import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './main.css';

let list = [];
let storedList = localStorage.getItem("storedTasks");

if (storedList) {
  list = JSON.parse(storedList);
}

document
  .addEventListener('DOMContentLoaded', function () {
    ReactDom.render(
      <App storedList={list}/>, document.querySelector('#app'))
  });