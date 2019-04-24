import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss';
import Loading from '../utils/Loading';
import ROUTES from './routes'
// import { PrivateRoute } from './PrivateRoute'

const GridExample = React.lazy(() => import('./_GridExample'));
const Welcome = React.lazy(() => import('./Welcome'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const My404 = React.lazy(() => import('../utils/My404'));

class App extends Component {

  
  render() {
    return (
      <>
        <div className='spa-container grid'>
          <header className='header'>
            HEADER
          </header>
          <nav className='nav'>
            NAV
          </nav>
          <main className='content'>
            CONTENT
          </main>
        </div>


        <Router>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />

              <Route path='/grid' component={GridExample} />
              <Route path={ROUTES.welcome} component={Welcome} />
              {/* FIXME user authentication checking */}
              {/* <PrivateRoute path={ROUTES.dashboard} component={Dashboard} /> */}
              <Route path={ROUTES.dashboard} component={Dashboard} />
              <Route component={My404} />
            </Switch>
          </React.Suspense>
        </Router>
      </>
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
