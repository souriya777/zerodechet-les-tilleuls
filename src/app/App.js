import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss'

import ROUTES from './routes'
import UserConnect from '../user/UserConnect'
import Header from '../common-ui/Header'

export class App extends Component {

  render() {

    return (
      <Router>
        <div className='screen'>
          <main className='content'>
            <header className='header'>
              <Route exact path={ROUTES.landing} component={Header} />
            </header>
            <Route exact path={ROUTES.landing} component={UserConnect} />
          </main>
          {/* <nav className='nav'>NAV</nav> */}
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state) {
  const user = state.user

  return {
    user,
    loading: user === null
  }
}

export default connect(mapStateToProps)(App);
