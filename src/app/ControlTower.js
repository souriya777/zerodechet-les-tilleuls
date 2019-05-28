import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import '../utils/ReactRouterHacking'
import ROUTES from '../app/routes'
import CustomRoute from '../app/CustomRoute'
import userAPI  from '../user/userAPI'
import { isLogged, isNew } from '../utils/user-utils'
import { handleUpdateUser } from '../user/userActions'
import LocalStorage, { USER_KEY } from '../utils/local-storage-utils'

import Header from '../common-ui/Header'
import Tuto from '../info/Tuto'

class ControlTower extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: LocalStorage.get(USER_KEY)
    }
  }

  componentDidMount() {
    this.listener = userAPI.onAuthStateChanged(this.persistUser, this.removeUser)
  }

  persistUser = user => {
    this.setState({ user })
    LocalStorage.set(USER_KEY, user)

    // sharing "user" with the rest of the world...
    this.props.dispatch(handleUpdateUser(user))
  }

  removeUser = () => {
    this.setState({ user: null })
    LocalStorage.remove(USER_KEY)
  }

  render() {
    const { user } = this.state
    // console.log('ControTower', user)
    console.log(isNew(user))

    if (isNew(user)) {
      const path = `${ROUTES.tuto}/:step?`
      return (
         <Switch>
            <Route 
              path={path} 
              render={() => (
                <>
                  <CustomRoute path={path} component={Header} smallMode={true} />
                  <Tuto />
                </>
              )} 
            />
            <Redirect from='/' to={ROUTES.tuto} />
         </Switch>
      )
    } 
    else if (isLogged(user)) {
      return <Redirect from={[ROUTES.signin, ROUTES.signup]} to={ROUTES.stat} />
    } 
    else {
      return (
        <Switch>
          <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />
          <Redirect from={[ROUTES.profile, ROUTES.weight, ROUTES.stat, ROUTES.rdv, ROUTES.tuto]} to={ROUTES.landing} />
        </Switch>
      )
    }
  }
}

export default connect()(ControlTower)