import React, { Component } from 'react';

import './sass/main.scss';
import Welcome from './components/Welcome';

// TODO lazy loading
// TODO error handling
// TODO state management

class App extends Component {
  render() {
    return (
      <div className="spa-container">
        <Welcome />
      </div>
    );
  }
}

export default App;
