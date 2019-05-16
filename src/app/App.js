import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'

import '../_resources/sass/main.scss'

import Loading from '../info/Loading'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Nav from '../common-ui/Nav'

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

// TODO 80/20
// mdp oublié
// erreur transitionWrapper
// erreur connexion affiché
// todo loading
// réduire épaisseur
// wording intro
// vérifier pourquoi la connexion twitter ne fonctionne pas

class App extends Component {

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>

          <Screen>
            <Content />
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
