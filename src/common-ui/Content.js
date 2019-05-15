import React from 'react'

import { Route } from 'react-router-dom'

import ROUTES from '../app/routes'
import PrivateRoute from '../app/PrivateRoute'

import UserConnect from '../user/UserConnect'
import Tuto from '../info/Tuto'
import Stat from '../stat/Stat'
import Header from './Header'

const Content = () =>
  <>
    {/* header is optional... */}
    <Route path={ROUTES.signin} component={Header} />
    <Route path={ROUTES.signup} component={Header} />
    
    <main className='content'>
      <Route path={ROUTES.tuto} component={Tuto} />
      <Route path={ROUTES.signin} component={UserConnect} />
      <Route path={ROUTES.signup} component={UserConnect} />
      <PrivateRoute path={ROUTES.stat} component={Stat} />
      <Route exact path={ROUTES.landing} component={UserConnect} />
    </main>
  </>

export default Content