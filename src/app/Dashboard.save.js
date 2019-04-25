import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Menu from '../common-ui/Menu';
import Contact from '../contact/Contact';
import { handleSignout } from '../user/userActions';
import ROUTES from './routes'
import BrowserDetection from '../utils/BrowserDetection';
import LocationUtils from '../utils/LocationUtils';

import LoadingBar from 'react-redux-loading'

const UserProfile = React.lazy(() => import('../user/UserHabits'));
const Garbage = React.lazy(() => import('../garbage/Garbage'));
const Progress = React.lazy(() => import('../progress/Progress'));
const Events = React.lazy(() => import('../event/Events'));
const Infos = React.lazy(() => import('../infos/Infos'));

class Dashboard extends React.Component {

  // FIXME right place?
  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render () {
    const path = this.props.match.path;
    // console.log(this.props);
    // console.log(this.state);
    console.log(this.props.match.path);
    

    const { user } = this.props
    // FIXME checking
    if (user === null || user === undefined || user.uid === null || user.uid === undefined) {
      return <Redirect to={ROUTES.landing} />
    }
    
  
    return (
      <div className='spa-container dashboard'>
        <Menu {...this.props} onSignout={this.handleSignout} />
        <main className='dashboard__content'>
          <LoadingBar />
          <div className="dev-info">
            React v{React.version}
            <Route path={ROUTES.landing} component={BrowserDetection} />
            <Route path={ROUTES.landing} component={LocationUtils} />
          </div>
          {/* <Redirect from={ROUTES.dashboard} to={ROUTES.dashboard + ROUTES.profile} /> */}
          <Switch>
            <Route exact path={ROUTES.dashboard} component={Garbage} />
            <Route path={ROUTES.dashboard + ROUTES.profile} component={UserProfile} />
            <Route path={ROUTES.dashboard + ROUTES.garbage} component={Garbage} />
            <Route path={ROUTES.dashboard + ROUTES.progress} component={Progress} />
            <Route path={ROUTES.dashboard + ROUTES.events} component={Events} />
            <Route path={ROUTES.dashboard + ROUTES.infos} component={Infos} />
          </Switch>
        </main>
  
        <Contact />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard);
