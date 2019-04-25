import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link } from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss';
import Loading from '../utils/Loading';
import ROUTES from './routes'
import BasicFormik from '../utils/BasicFormik'
import { WelcomeHeader, WelcomeContent } from './Welcome'
import { SigninHeader, SigninContent } from '../user/Signin'
import { SignupHeader, SignupContent, SignupChoiceContent } from '../user/Signup'
import { TermsHeader, TermsContent } from '../infos/Terms'
import { ResetPwdHeader, ResetPwdContent } from '../user/ResetPwd'

const GridExample = React.lazy(() => import('./_GridExample'))
const My404 = React.lazy(() => import('../utils/My404'))

class App extends Component {

  
  render() {
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
          </header>
          <nav className='nav'>
            <Link to={ROUTES.welcome}>Accueil</Link>
          </nav>
          <main className='content'>
            <Route path={ROUTES.welcome} component={WelcomeContent} />
            <Route path={ROUTES.signin} component={SigninContent} />
            <Route path={ROUTES.signupChoice} component={SignupChoiceContent} />
            <Route path={ROUTES.signup} component={SignupContent} />
            <Route path={ROUTES.terms} component={TermsContent} />
            <Route path={ROUTES.resetPwd} component={ResetPwdContent} />

            <Route path='/basic-formik' component={BasicFormik} />
          </main>
        </div>

        {/* FIXME 404 */}
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />
            
            {/* FIXME user authentication checking */}
            {/* <PrivateRoute path={ROUTES.dashboard} component={Dashboard} /> */}
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
