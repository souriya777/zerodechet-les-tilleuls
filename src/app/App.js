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
// import { PrivateRoute } from './PrivateRoute'

import { WelcomeHeader, WelcomeContent } from './Welcome'
import { SigninHeader, SigninContent } from '../user/Signin'

const GridExample = React.lazy(() => import('./_GridExample'));
const My404 = React.lazy(() => import('../utils/My404'));

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className='spa-container grid'>
          <header className='header'>
            <Route path={ROUTES.welcome} component={WelcomeHeader} />
            <Route path={ROUTES.signin} component={SigninHeader} />
          </header>
          <nav className='nav'>
            <Link to={ROUTES.welcome}>Accueil</Link>
          </nav>
          <main className='content'>
            <Route path={ROUTES.welcome} component={WelcomeContent} />
            <Route path={ROUTES.signin} component={SigninContent} />
          </main>
        </div>

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />

            <Route path='/grid' component={GridExample} />
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
