import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

import Button from '../common-ui/Button'

export const EventsHeader = () => (
  <div className="events__header">
    <h1 className='h1'>Événements</h1>
  </div>
)

class Events extends Component {

  render () {
    return (
      <div className='events__content'>
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
          <div>
            <Button transparency={true}>Montrer davantage</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Events)