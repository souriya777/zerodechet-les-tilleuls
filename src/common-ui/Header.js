import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import ROUTES from '../app/routes'
import { UserWelcomeHeader } from '../user/UserWelcome'
import IconArrowBack from './icons/IconArrowBack'

const Header = () => (
  <header className='header'>
    <Switch>
      <Route exact path={ROUTES.landing} component={UserWelcomeHeader} />
      <HeaderGeneric path={ROUTES.signin} title='Heureux de vous revoir !' />
      <HeaderGeneric path={ROUTES.terms} title='Conditions générales' />
      <HeaderGeneric path={ROUTES.garbage} title='Peser des déchets' />
      <HeaderGeneric path={ROUTES.progress} title={'Progression'} />
      <HeaderGeneric path={ROUTES.events} title='Événements' />
      <HeaderGeneric path={ROUTES.userProfile} title='Profil' />

      <HeaderGeneric path={[ROUTES.signup, ROUTES.signupChoice]} title='Inscription'>
        Faites partie d'une communauté d'aventuriers oeuvrant pour la planète
      </HeaderGeneric>
      <HeaderGeneric path={ROUTES.resetPwd} title='Réinitialiser le mot de passe'>
        Saisissez l'e-mail asocié à votre compte. Nous vous enverrons un lien par e-mail pour réinitialiser votre mot de passe
      </HeaderGeneric>

      <HeaderBack path={ROUTES.eventCreation} linkTo={ROUTES.events} />
    </Switch>
  </header>
)

const HeaderGeneric = ({ path, title, children }) => (
  <Route exact path={path} render={() => (
    <>
      <h1 className='h1'>{title}</h1>
      <p>{children}</p>
    </>
  )} />
)

const HeaderBack = ({ path, linkTo }) => (
  <Route exact path={path} render={() => (
    <Link className='link' to={linkTo}>
      <IconArrowBack />
    </Link>
  )} />
)

export default Header
