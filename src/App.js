import React, { Component } from 'react';
import './sass/main.scss';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="spa-container">
        <Login />
      </div>
    );
  }
}

export default App;
