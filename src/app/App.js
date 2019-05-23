import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import '../_resources/sass/main.scss'

import Loading from '../info/Loading'
import ScrollToTop from '../common-ui/ScrollToTop'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Nav from '../common-ui/Nav'
import ControlTower from './ControlTower'
import ErrorWatcher from '../utils/ErrorWatcher'

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

/*
TODO
- write weight
- read weight
- test creation direct compte Google...
- refresh after load data
- bar de chargement : load data

// réduire épaisseur
// material-ui pkg perf....

// improvement :
- implement Dan Abramov solution linked in it : https://daveceddia.com/where-fetch-data-redux/
*/
class App extends Component {

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>
          <ScrollToTop>
            <LoadingBar />

            <ControlTower />

            <Screen>
              <Content />
            </Screen>

            <nav className='nav'>
              <Nav />
            </nav>

            <ErrorWatcher />
          </ScrollToTop>
        </Router>
      </React.Suspense> 
    )
  }
}

export default App
