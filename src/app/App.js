import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss'

import ROUTES from './routes'
import UserConnect from '../user/UserConnect'
import HeaderConnect from '../common-ui/HeaderConnect'

// TODO check sur tous les navigateurs...

export class App extends Component {

  render() {

    return (
      <Router>
        <div className='screen'>
          <header className='header'>
            <Route path={ROUTES.landing} component={HeaderConnect} />
          </header>
          <main className='content'>
            <Route path={ROUTES.landing} component={UserConnect} />
          </main>
          <nav className='nav'>NAV</nav>
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
