import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import { handleResetPwd } from './userActions'
import { ResetPwdForm } from './ResetPwdForm'
import Button from '../common-ui/Button'

class ResetPwd extends Component {
  state = {
    pwdSent: false
  }

  handleSubmit = ({email}) => {
    this.props.dispatch(handleResetPwd(email))
    this.setState({pwdSent: true})
  }

  render() {
    const { pwdSent } = this.state

    return (
      <>
        {pwdSent 
          ? <div>
              <div className='u-margin-bottom-small'>Un mot de passe vient de vous être envoyé. Veuillez vérifier votre boîte email.</div>
              <Link className='link' to={ROUTES.landing}>
                <Button raised={true}>Retourner à l'accueil</Button>
              </Link>
            </div>
          : <ResetPwdForm onSubmit={this.handleSubmit} />
        }
        
      </>
    )
  }
}

export default connect()(ResetPwd)