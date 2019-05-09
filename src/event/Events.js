import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

import Button from '../common-ui/Button'

class Events extends Component {

  render () {
    return (
      <div className='content-grid'>
        <div className='events__creation'>
          <Link className='link' to={ROUTES.eventCreation}>
            <Button raised={true}>Proposer un événement</Button>
          </Link>
        </div>

        <div className='events__list'>
          <h2 className='h2'>Prochainement :</h2>
          <ul>
            <li>8 JUIN: Réunion des participants au défi(<button>X S'inscrire</button>)</li>
            <li>15 JUIN: Atelier "Recycler les déchets de cuisines" (<button>V Se désinscrire</button>)</li>
            <li>23 JUIN: Préparer le jardin collectif pour accueillir des semences (<button>X S'inscrire</button>)</li>
          </ul>
        </div>
        <div>
          <Button transparency={true}>Montrer davantage</Button>
        </div>
      </div>
    )
  }
}

export default connect()(Events)