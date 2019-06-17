import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AUDIENCE } from '../utils/AudienceHelper'
import { CITY } from '../utils/CityHelper'
import { TOPIC } from '../utils/TopicHelper'

import RdvList from './RdvList'
import SmartInput from '../common-ui/SmartInput'
import SmartSelect from '../common-ui/SmartSelect'

// TODO
// INFO
  // img
  // typeEvt-date-heure-nbPlaceDispo(VERT)/Plus de places disponibles(ROUGE)
  // SINSCRIRE(VERT)/SE DESINSCRIRE/ROUGE)
  // titre
  // adresse
// CLIC PREVIEW
// filtre : mot clé, thématiques, villes, public
// LISTE D'ATTENTE

class Rdv extends Component {

  handleChangeTopic = e => {
    const topic = e.target.value
    console.log(topic)
  }

  handleChangeCity = e => {
    const city = e.target.value
    console.log(city)
  }

  handleChangePublic = e => {
    const publicType = e.target.value
    console.log(publicType)
  }

  render() {
    return (
      <div className='rdv'>
        <h2 className='h2'>Les rendez-vous</h2>
        <div className='rdv__filter'>
          <SmartInput 
            type='text'
            name='keyword' 
            placeholder='Entrez un mot clé' 
          />
          <SmartSelect
            options={TOPIC.labelList}
            ids={TOPIC.keyList}
            placeholder='Thématique'
            onChange={this.handleChangeTopic}
          />
          <SmartSelect
            options={CITY.labelList}
            ids={CITY.keyList}
            placeholder='Ville'
            onChange={this.handleChangeCity}
          />
          <SmartSelect
            options={AUDIENCE.labelList}
            ids={AUDIENCE.keyList}
            placeholder='Public'
            onChange={this.handleChangePublic}
          />
        </div>
        <div className='rdv__list'>
          <RdvList />
        </div>
      </div>
    )
  }
}

export default connect()(Rdv)