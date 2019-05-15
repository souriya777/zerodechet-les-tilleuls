import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import '../_resources/sass/main.scss'
import ROUTES from './routes'
import Loading from '../info/Loading'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Header from '../common-ui/Header'
import Nav from '../common-ui/Nav'

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

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

            <Switch>
              <Route path={ROUTES.signin} component={Header} />
              <Route path={ROUTES.signup} component={Header} />
            </Switch>

            <main className='content'>
              <Content />
            </main>
          </Screen>

          <nav className='nav'>
            <Nav />
          </nav>

        </Router>
      </React.Suspense> 
    )
  }
}

export default App
