import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

class TutoIntro extends Component {

  render() {
    const { user } = this.props
    const name = user != null ? user.name : ''

    return (
      <>
        <h1 className='h1'>Bienvenue {name}</h1>

        <div className='tuto__wording'>
          Le questionnaire suivant nous permettra de mieux vous connaître, et servira à paramétrer l'application.
        </div>

        <div className='tuto__wording'>
          La communauté du Défi Famille vous remercie
          <span aria-label='gracefull' role='img'>🙏🎉</span>
        </div>

        <div className='tuto__action'>
          <Link className='link' to={`${ROUTES.tuto}/1`}>
            <button className='btn'>
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