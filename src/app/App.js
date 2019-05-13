import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux'
import pathToRegexp from 'path-to-regexp'

import '../_resources/sass/main.scss'

import PrivateRoute from './PrivateRoute'
import ROUTES, { anonymousPath } from './routes'
import UserConnect from '../user/UserConnect'
import HeaderConnect from '../common-ui/HeaderConnect'
import Stat from '../stat/Stat';
import { isLogged } from '../utils/user-utils'

// TODO karim
// couleur verte border verte
// police + grande
// logo

// TODO check sur tous les navigateurs...
// TODO vérifier pourquoi la connexion twiter ne fonctionne pas

export class App extends Component {

  render() {
    const { user } = this.props

    return (
      <Router>
        <Switch>
          <Redirect 
            exact
            from={ROUTES.landing} 
            to={ROUTES.signin} 
          />
          { isLogged(user)
            ? <Redirect from={ROUTES.signin} to={ROUTES.stat} />
            : ''
          }
        </Switch>

        <div className='screen'>
          <header className='header'>
            <Route path={pathToRegexp([ROUTES.signin, ROUTES.signup])} component={HeaderConnect} />
          </header>
          <main className='content'>
            <Route path={pathToRegexp([ROUTES.signin, ROUTES.signup])} component={UserConnect} />
            <PrivateRoute path={ROUTES.stat} component={Stat} />
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
