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

import Loading from '../utils/Loading'
import ROUTES from './routes'
import UserWelcome from '../user/UserWelcome'
import UserConnect from '../user/UserConnect'
import Signin from '../user/Signin'
import Signup from '../user/Signup'
import SignupChoice from '../user/SignupChoice'
import Terms from '../infos/Terms'
import ResetPwd from '../user/ResetPwd'
import PrivateRoute from './PrivateRoute'
import { isLogged } from '../utils/user-utils'
import Weight from '../weight/Weight'
import Progress from '../progress/Progress'
import Event from '../event/Event'
import EventCreation from '../event/EventCreation'
import UserProfile from '../user/UserProfile'
import Header from '../common-ui/Header'
import Nav from '../common-ui/Nav'

// const My404 = React.lazy(() => import('../utils/My404'))

// TODO generate unique UID https://medium.com/@leejh3224/testing-firebase-cloud-functions-with-jest-4156e65c7d29
// TODO code splitting
// TODO turn firestore DB into "private"
// TODO saisie pesée : pré-remplir les champs quand on peut
// TODO responsibe : paysage, Ipad 2 modes, pc standard, géant
// TODO date support in safari
// TODO change laosoupi59@gmail.com
// TODO change uid in DATA (it's dynamically returned by DB)
// TODO <PrivateRoute> instead of <Route>

export class App extends Component {

  render() {
    const { user } = this.props
    
    // FIXME
    // console.log('props', this.props)
    // console.log('state', this.state)
    // console.log(isLogged(user))
    

    return (
      <Router>
        <div className='spa-container grid'>
          <Header />

          <main className='content'>
            <Route exact path={ROUTES.landing} component={UserConnect} />
            <Route path={ROUTES.signin} component={Signin} />
            <Route path={ROUTES.signupChoice} component={SignupChoice} />
            <Route path={ROUTES.signup} component={Signup} />
            <Route path={ROUTES.terms} component={Terms} />
            <Route path={ROUTES.resetPwd} component={ResetPwd} />

            <PrivateRoute path={ROUTES.weight} component={Weight} />
            <PrivateRoute path={ROUTES.progress} component={Progress} />
            <Route path={ROUTES.event} component={Event} />
            <Route path={ROUTES.eventCreation} component={EventCreation} />
            <Route path={ROUTES.userProfile} component={UserProfile} />
          </main>
        </div>

        <Nav />

        <React.Suspense fallback={<Loading />}>
          <Switch>
            { isLogged(user)
              ? <Redirect 
                  exact
                  from={pathToRegexp([ROUTES.landing, ROUTES.signin, ROUTES.signupChoice, ROUTES.signup])} 
                  to={ROUTES.progress} />
              : ''
            }
            {/* <Route component={My404} /> */}
          </Switch>
        </React.Suspense>
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
