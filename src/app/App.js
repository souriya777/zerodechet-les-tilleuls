import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'

import '../_resources/sass/main.scss'

import Loading from '../info/Loading'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Nav from '../common-ui/Nav'
import ControlTower from './ControlTower';

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

/*
TODAY
- popup
- message d'erreur
- fake user
- transparency button déconnecter
- write weight
- read weight
- USER-link->signin & data???
*/

// TODO 80/20
// erreur connexion affiché
// todo loading
// réduire épaisseur
// material-ui pkg perf....
// combine PrivateRoute & ControlTower

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>

          <ControlTower />

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
