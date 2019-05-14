import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import '../_resources/sass/main.scss'
import ROUTES from './routes'
import Loading from '../info/Loading'
import Content from '../common-ui/Content'

// lazy loading
const Screen = React.lazy(() => import('../common-ui/Screen'))
const Nav = React.lazy(() => import('../common-ui/Nav'))
const Header = React.lazy(() => import('../common-ui/Header'))

// TODO karim
// mdp oublié
// centrer typo
// réduire épaisseur
// wording intro
// vérifier pourquoi la connexion twitter ne fonctionne pas

class App extends Component {

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>

          <Screen>

            <header className='header'>
              <Switch>
                <Route path={ROUTES.signin} component={Header} />
                <Route path={ROUTES.signup} component={Header} />
              </Switch>
            </header>

            <main className='content'>
              <Content />
            </main>

            <nav className='nav'>
              <Nav />
            </nav>

          </Screen>

        </Router>
      </React.Suspense>
    )
  }
}

export default App
