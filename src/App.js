import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Format from './Format.js';


class App extends Component {
  render() {
    console.log('sf', Format.getSymbol('inr'));
    return (
      <div>
      </div>
    );
  }
}

export default App;
