import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
// import withLightMode from '../utils/withLightMode'

import UserConnect from '../user/UserConnect'
import UserResetPwd from '../user/UserResetPwd'
import Tuto from '../info/Tuto'
import Stat from '../stat/Stat'
import Header from './Header'
import Weight from '../weight/Weight';
import UserProfile from '../user/UserProfile';
import RDV from '../rdv/RDV';

const Content = ({location}) => { 
  // FIXME replace with HOC ? (how to compose it according to "withRouter"...)
  const { pathname } = location
  let lightMode = ''
  if (
    ROUTES.stat === pathname ||
    ROUTES.weight === pathname ||
    ROUTES.rdv === pathname ||
    ROUTES.profile === pathname
  ) {
    lightMode = 'content--light'
  }

  return (
    <>

      {/* header is optional... */}
      <Route 
        path={[
          ROUTES.signin, 
          ROUTES.signup,
          ROUTES.resetPwd,
          ROUTES.stat,
          ROUTES.weight,
          ROUTES.profile,
          ROUTES.rdv
        ]} 
        component={Header} 
      />
      
      <main className={`content ${lightMode}`}>
        <Route path={ROUTES.tuto} component={Tuto} />
        <Route path={ROUTES.signin} component={UserConnect} />
        <Route path={ROUTES.signup} component={UserConnect} />
        <Route path={ROUTES.resetPwd} component={UserResetPwd} />
        <Route exact path={ROUTES.landing} component={UserConnect} />

        <Route path={ROUTES.stat} component={Stat} />
        <Route path={ROUTES.weight} component={Weight} />
        <Route path={ROUTES.stat} component={Stat} />
        <Route path={ROUTES.profile} component={UserProfile} />
        <Route path={ROUTES.rdv} component={RDV} />
      </main>
    </>
  )
}

export default withRouter(Content)