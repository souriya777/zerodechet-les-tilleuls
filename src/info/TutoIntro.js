import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

class TutoIntro extends Component {

  render() {
    const { user } = this.props
    
    if (user == null) {
      return null
    }

    return (
      <>
        <div className='center'>
          <h2 className='h2'>Bienvenue</h2>
          <h3 className='h3'>{user.name}</h3>
        </div>

        <div className='center'>
          <h4 className='h4'>
            Le questionnaire suivant nous permettra de mieux vous connaître, et servira à paramétrer l'application.
          </h4>
        </div>

        <div className='tuto__action'>
          <Link className='link' to={`${ROUTES.tuto}/1`}>
            <button className='btn f__btn'>
              Commencer
            </button>
          </Link>
        </div>
      </>
    )
  }
}


const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(TutoIntro)