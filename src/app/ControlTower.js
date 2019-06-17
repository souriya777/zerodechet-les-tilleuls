import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import '../utils/ReactRouterHacking'
import ROUTES from '../app/routes'
import userAPI  from '../user/userAPI'
import { isLogged, isNew } from '../utils/user-utils'
import { handleUpdateUser } from '../user/userActions'
import LocalStorage, { USER_KEY } from '../utils/local-storage-utils'

class ControlTower extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: LocalStorage.get(USER_KEY),
    }
  }

  componentDidMount() {
    userAPI.onAuthStateChanged(this.persistUser, this.removeUser)
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
    const { user } = this.state

    // LOGGED
    if (isLogged(user)) {
      // NEW USER
      if (isNew(user)) {
        return (
          <Switch>
            <Redirect from={[ROUTES.signin, ROUTES.signup]} to={ROUTES.tuto} />
            <Redirect from={[ROUTES.profile, ROUTES.rdv, ROUTES.weight, ROUTES.stat]} to={ROUTES.tuto} />
            <Redirect exact from='/' to={ROUTES.tuto} />
          </Switch>
        ) 
      } else {
        return (
          <Switch>
            <Redirect from={[ROUTES.signin, ROUTES.signup, ROUTES.tuto]} to={ROUTES.stat} />
            <Redirect exact from='/' to={ROUTES.stat} />
          </Switch>
        ) 
      }
    } else {
      return (
        <Switch>
          <Redirect from={[ROUTES.profile, ROUTES.rdv, ROUTES.weight, ROUTES.stat]} to='/' />
          <Redirect from={ROUTES.tuto} to='/' />
          <Redirect exact from='/' to={ROUTES.welcome} />
        </Switch>
      )
    }

  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(ControlTower)