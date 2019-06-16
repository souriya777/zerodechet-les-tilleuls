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
        <div className='paragraph paragraph--highlighted'>
          Bienvenue {user.name}
        </div>

        <div className='paragraph'>
          Le questionnaire suivant nous permettra de mieux vous connaître, et servira à paramétrer l'application.
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