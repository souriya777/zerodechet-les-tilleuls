import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import '../_resources/sass/main.scss'
import PrivateRoute from './PrivateRoute'
import ROUTES, { anonymousPath } from './routes'
import { isLogged } from '../utils/user-utils'
import Loading from '../info/Loading'

// lazy loading
const Screen = React.lazy(() => import('../common-ui/Screen'))
const UserConnect = React.lazy(() => import('../user/UserConnect'))
const HeaderConnect = React.lazy(() => import('../common-ui/HeaderConnect'))
const Stat = React.lazy(() => import('../stat/Stat'))
const Tuto = React.lazy(() => import('../info/Tuto'))

// TODO karim
// mdp oublié
// wording intro

// TODO check sur tous les navigateurs...
// TODO vérifier pourquoi la connexion twiter ne fonctionne pas

export class App extends Component {

  render() {
    const { user } = this.props

    return (
      <React.Suspense fallback={<Loading />}>
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

          <Screen>
            <header className='header'>
              <Route path={anonymousPath()} component={HeaderConnect} />
            </header>
            <main className='content'>
              <Route path={ROUTES.tuto} component={Tuto} />
              <Route path={anonymousPath()} component={UserConnect} />
              <PrivateRoute path={ROUTES.stat} component={Stat} />
            </main>
            {/* <nav className='nav'>NAV</nav> */}
          </Screen>

        </Router>
      </React.Suspense>
    )
  }
}

function mapStateToProps (state) {
  const user = state.user

  return {
    user,
    loading: user === null
  }
}

export default connect(mapStateToProps)(App)
