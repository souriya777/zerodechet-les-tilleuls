import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Menu from '../common-ui/Menu';
import Contact from './Contact';
import { handleSignout } from '../user/userActions';
import ROUTES from './routes'

const Profile = React.lazy(() => import('../user/Profile'));
const Garbage = React.lazy(() => import('../garbage/Garbage'));
const Progress = React.lazy(() => import('../progress/Progress'));
const Events = React.lazy(() => import('../event/Events'));
const Infos = React.lazy(() => import('../infos/Infos'));

class Dashboard extends React.Component {

  handleSignout = () => {
    console.log('signout', this.state);
    // this.dispatch(handleSignout(this.state.user.uid))
  }

  render () {
    const path = this.props.match.path;
    console.log(this.state, this.props);

    const { user } = this.props
    if (user === null) {
      return <Redirect to={ROUTES.landing} />
    }
    
  
    return (
      <div className='spa-container dashboard'>
        <Menu {...this.props} onSignout={this.handleSignout} />
        <main className='dashboard__content'>
          <Switch>
            <Route path={`${path + ROUTES.profile}`} component={Profile} />
            <Route path={`${path + ROUTES.garbage}`} component={Garbage} />
            <Route path={`${path + ROUTES.progress}`} component={Progress} />
            <Route path={`${path + ROUTES.events}`} component={Events} />
            <Route path={`${path + ROUTES.infos}`} component={Infos} />
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
