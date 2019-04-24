import React from 'react'

import Logo from './Logo'

import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import ButtonSocial from '../common-ui/ButtonSocial'
import Hr from '../common-ui/Hr'

const Signin = React.lazy(() => import('../user/Signin'))

const Welcome = () => {

  return (
    <div className='spa-container welcome'>
      <div className='welcome__header'>
        <Logo />
        <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="welcome__body">
        <Signin />
        {/* <Route exact path={ROUTES.welcome} render={() =>
          <>
          <div className="welcome__log">
            <Link className='btn btn--raised u-margin-bottom-small' to={ROUTES.welcome + ROUTES.signin}>Se connecter</Link>
            <Link className='btn' to={ROUTES.welcome + ROUTES.signup}>S'inscrire</Link>
          </div>
          </>
          }
        />
        <Route path={ROUTES.welcome + ROUTES.signin} component={Signin} />
        <Route path={ROUTES.welcome + ROUTES.signup} component={Signup} />
        <Route path={ROUTES.welcome + ROUTES.resetPwd} component={ResetPwd} /> */}
      </div>

      <div className='welcome__footer'>
        <Hr text='OU' />
        <div className='welcome__social'>
          <ButtonSocial icon={IconFacebook} legend='Facebook' />
          <ButtonSocial icon={IconGoogle} legend='Google' />
        </div>
      </div>

    </div>
  )
}

export default Welcome