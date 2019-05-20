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
TODO
- popup
- message d'erreur connexion
- write weight
- read weight
- test creation direct compte Google...

// réduire épaisseur
// material-ui pkg perf....
*/
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
