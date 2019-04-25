import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link 
} from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss';
import Loading from '../utils/Loading';
import ROUTES from './routes'
import { WelcomeHeader, WelcomeContent } from './Welcome'
import SigninContent, { SigninHeader } from '../user/Signin'
import SignupContent, { SignupHeader } from '../user/Signup'
import SignupChoice from '../user/SignupChoice'
import { handleSignout } from '../user/userActions';
import { TermsHeader, TermsContent } from '../infos/Terms'
import { ResetPwdHeader, ResetPwdContent } from '../user/ResetPwd'
import PrivateRoute from './PrivateRoute'
import { isLogged } from '../utils/user-utils'
import Garbage, { GarbageHeader } from '../garbage/Garbage'
import Progress, { ProgressHeader } from '../progress/Progress'
import UserHabits, { UserHabitsHeader } from '../user/UserHabits'

const GridExample = React.lazy(() => import('./_GridExample'))
const My404 = React.lazy(() => import('../utils/My404'))

class App extends Component {

  // FIXME right place?
  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    const { user } = this.props
    
    // FIXME
    console.log('props', this.props)
    console.log('state', this.state)
    console.log(isLogged(user))
    

    return (
      <Router>
        <div className='spa-container grid'>
          <header className='header'>
            <Route path={ROUTES.welcome} component={WelcomeHeader} />
            <Route path={ROUTES.signin} component={SigninHeader} />
            <Route path={ROUTES.signupChoice} component={SignupHeader} />
            <Route path={ROUTES.signup} component={SignupHeader} />
            <Route path={ROUTES.terms} component={TermsHeader} />
            <Route path={ROUTES.resetPwd} component={ResetPwdHeader} />
            <Route path={ROUTES.garbage} component={GarbageHeader} />
            <Route path={ROUTES.progress} component={ProgressHeader} />
            <Route path={ROUTES.userHabits} component={UserHabitsHeader} />
          </header>
          <nav className='nav'>
            <Link to={ROUTES.welcome}>Accueil</Link>
            {/* { isLogged(user)
              ? <> */}
                  <Link to={ROUTES.garbage}>Déchets</Link>
                  <Link to={ROUTES.progress}>Progression</Link>
                  <Link to={ROUTES.userHabits}>Vos habitudes</Link>
                  <Link to={ROUTES.events}>Événements</Link>
                  <Link to={ROUTES.infos}>Infos</Link>
                  <a href='#' onClick={this.handleSignout}>Logout</a>
                {/* </>
              : ''
            } */}
          </nav>
          <main className='content'>
            <Route path={ROUTES.welcome} component={WelcomeContent} />
            <Route path={ROUTES.signin} component={SigninContent} />
            <Route path={ROUTES.signupChoice} component={SignupChoice} />
            <Route path={ROUTES.signup} component={SignupContent} />
            <Route path={ROUTES.terms} component={TermsContent} />
            <Route path={ROUTES.resetPwd} component={ResetPwdContent} />

            {/* FIXME private */}
            <Route path={ROUTES.garbage} component={Garbage} />
            <Route path={ROUTES.progress} component={Progress} />
            <Route path={ROUTES.userHabits} component={UserHabits} />
          </main>
        </div>

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />
            {/* <Route path={ROUTES.garbage} component={Garbage} /> */}
            {/* { isLogged(user)
              ? <Redirect 
                from={[ROUTES.welcome, ROUTES.signin, ROUTES.signupChoice, ROUTES.signup]} 
                to={ROUTES.garbage} />
              : ''
            } */}
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
