import React, { Component } from 'react';
import './App.css';
import Register from './register.js';

class App extends Component {
  render() {
    return (
      <div>
      <h2 className="paddl20">##Header##</h2>
      <Register> </Register>
      </div>
    );
  }
}

export default App;
