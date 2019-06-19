import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from '../app/routes'
import withLightMode from '../utils/withLightMode'
import CustomRoute from '../app/CustomRoute'

import Header from './Header'
import HeaderTxt from './HeaderTxt'
import UserConnect from '../user/UserConnect'
import UserResetPwd from '../user/UserResetPwd'
import Tuto from '../info/Tuto'
import Welcome from '../info/Welcome'
import Rdv from '../rdv/Rdv'
import Stat from '../stat/Stat'
import Weight from '../weight/Weight'
import UserProfile from '../user/UserProfile'
import RdvDetail from '../rdv/RdvDetail'
import Terms from '../info/Terms'

const Content = ({ lightMode }) => { 
  // FIXME
  const tutoPath = `${ROUTES.tuto}/:step?`

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
      <CustomRoute path={tutoPath} component={Header} smallMode={true} />
      
      {/* BODY */}
      <main className={`content ${lightMode}`}>
        <Route path={ROUTES.welcome} component={Welcome} />
        <Route path={ROUTES.signin} component={UserConnect} />
        <Route path={ROUTES.signup} component={UserConnect} />
        <Route path={ROUTES.resetPwd} component={UserResetPwd} />
        <Route path={ROUTES.terms} component={Terms} />



        <Route path={tutoPath} component={Tuto} />
        <Route exact path={ROUTES.rdv} component={Rdv} />
        <Route path={`${ROUTES.rdv}/:id`} component={RdvDetail} />
        <Route path={ROUTES.weight} component={Weight} />
        <Route path={ROUTES.stat} component={Stat} />
        <Route path={ROUTES.profile} component={UserProfile} />
      </main>
    </>
  )
}

export default withLightMode(Content)