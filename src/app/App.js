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
import { UserWelcomeHeader, UserWelcomeContent } from '../user/UserWelcome'
import SigninContent, { SigninHeader } from '../user/Signin'
import SignupContent, { SignupHeader } from '../user/Signup'
import SignupChoice from '../user/SignupChoice'
import { TermsHeader, TermsContent } from '../infos/Terms'
import { ResetPwdHeader, ResetPwdContent } from '../user/ResetPwd'
import PrivateRoute from './PrivateRoute'
import { isLogged } from '../utils/user-utils'
import Garbage, { GarbageHeader } from '../garbage/Garbage'
import Progress, { ProgressHeader } from '../progress/Progress'
import Events, { EventsHeader } from '../event/Events'
import EventCreation, { EventCreationHeader } from '../event/EventCreation'
import UserProfile, { UserProfileHeader } from '../user/UserProfile'
import Nav from '../common-ui/Nav'

// const My404 = React.lazy(() => import('../utils/My404'))

// TODO saisie pesée : pré-remplir les champs quand on peut
// TODO responsibe : paysage, Ipad 2 modes, pc standard, géant
// TODO date support in safari

export class App extends Component {

  render() {
    const { user } = this.props
    
    // FIXME
    // console.log('props', this.props)
    // console.log('state', this.state)
    // console.log(isLogged(user))
    

    return (
      <Router>
        <div className='spa-container'>
          <header className='header'>
            <Route exact path={ROUTES.landing} component={UserWelcomeHeader} />
            <Route path={ROUTES.signin} component={SigninHeader} />
            <Route path={ROUTES.signupChoice} component={SignupHeader} />
            <Route path={ROUTES.signup} component={SignupHeader} />
            <Route path={ROUTES.terms} component={TermsHeader} />
            <Route path={ROUTES.resetPwd} component={ResetPwdHeader} />

            <PrivateRoute path={ROUTES.garbage} component={GarbageHeader} />
            <PrivateRoute path={ROUTES.progress} component={ProgressHeader} />
            <PrivateRoute path={ROUTES.events} component={EventsHeader} />
            <PrivateRoute path={ROUTES.eventCreation} component={EventCreationHeader} />
            <PrivateRoute path={ROUTES.userProfile} component={UserProfileHeader} />
          </header>
          <main className='content'>
            <Route exact path={ROUTES.landing} component={UserWelcomeContent} />
            <Route path={ROUTES.signin} component={SigninContent} />
            <Route path={ROUTES.signupChoice} component={SignupChoice} />
            <Route path={ROUTES.signup} component={SignupContent} />
            <Route path={ROUTES.terms} component={TermsContent} />
            <Route path={ROUTES.resetPwd} component={ResetPwdContent} />

            <PrivateRoute path={ROUTES.garbage} component={Garbage} />
            <PrivateRoute path={ROUTES.progress} component={Progress} />
            <PrivateRoute path={ROUTES.events} component={Events} />
            <PrivateRoute path={ROUTES.eventCreation} component={EventCreation} />
            <PrivateRoute path={ROUTES.userProfile} component={UserProfile} />
          </main>
        </div>

        <Nav />

        <React.Suspense fallback={<Loading />}>
          <Switch>
            {/* <Route path={ROUTES.garbage} component={Garbage} /> */}
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
