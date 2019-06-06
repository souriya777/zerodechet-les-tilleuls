import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from '../app/routes'
import withLightMode from '../utils/withLightMode'
import CustomRoute from '../app/CustomRoute'

import UserConnect from '../user/UserConnect'
import UserResetPwd from '../user/UserResetPwd'
import Welcome from '../info/Welcome'
import Stat from '../stat/Stat'
import Header from './Header'
import Weight from '../weight/Weight'
import UserProfile from '../user/UserProfile'

const Content = ({ lightMode }) => { 
  return (
    <>
      {/* HEADER */}
      {/* header is optional... */}
      <Route 
        path={[
          ROUTES.signin, 
          ROUTES.signup,
          ROUTES.resetPwd,
        ]} 
        component={Header} 
      />
      <CustomRoute 
        path={[
          ROUTES.stat, 
          ROUTES.weight,
          ROUTES.profile,
        ]} 
        component={Header} 
        smallMode={true}
      />
      
      {/* BODY */}
      <main className={`content ${lightMode}`}>
        <Route path={ROUTES.welcome} component={Welcome} />
        <Route path={ROUTES.signin} component={UserConnect} />
        <Route path={ROUTES.signup} component={UserConnect} />
        <Route path={ROUTES.resetPwd} component={UserResetPwd} />

        <Route path={ROUTES.weight} component={Weight} />
        <Route path={ROUTES.stat} component={Stat} />
        <Route path={ROUTES.profile} component={UserProfile} />
      </main>
    </>
  )
}

export default withLightMode(Content)