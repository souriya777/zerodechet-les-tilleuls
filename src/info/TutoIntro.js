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
          Félicitation pour avoir rejoint notre belle communauté des aventuriers du <a href='https://www.roubaixzerodechet.fr/le-defi-familles/' className='link link--href' target='_blank' rel="noopener noreferrer">défi Zéro Déchet </a> <span aria-label='gracefull' role='img'>🙏🎉</span>
        </div>

        <div className='tuto__wording'>
          Nous allons maintenant paramétrer l'application... Ne vous inquiétez pas, cela sera très rapide ! <span aria-label='happiness' role='img'>😉</span>
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