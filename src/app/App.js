import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'

import '../_resources/sass/main.scss'
import { setError } from '../utils/ErrorActions'

import Loading from '../info/Loading'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Nav from '../common-ui/Nav'
import ControlTower from './ControlTower';
import Popup from '../common-ui/Popup';

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

/*
TODO
- write weight
- read weight
- test creation direct compte Google...

// réduire épaisseur
// material-ui pkg perf....
*/
class App extends Component {

  handleClosePopup = () => {
    console.log('handleClosePopup')
    this.props.dispatch(setError())
  }

  render() {
    const { errorMsg } = this.props

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

          {errorMsg ?
            <Popup
              title='Oups...'
              onClose={this.handleClosePopup}
            >
              {errorMsg}
            </Popup>
            : ''
          }
          

        </Router>
      </React.Suspense> 
    )
  }
}


const mapStateToProps = state => ({ errorMsg: state.error.errorMsg })

export default connect(mapStateToProps)(App)
