import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'
import { handleAddWeight } from './weightActions'

const moment = require('moment')
// const reverseDate = (d1, d2) => {
const reverseDate = () => {
  return moment('2018-05-08').isAfter(new Date())
}

class WeightForm extends Component {

  handleSubmit = ({nbPers, startDate, endDate, recycled, norecycled}) => {
    const { user, dispatch } = this.props
    dispatch(handleAddWeight(user.uid, nbPers, startDate, endDate, recycled, norecycled))
  } 

  render () {
    const { nbPers } = this.props

    ///////// IN ORDER TO HAVE DYNAMIC CONTROLS
    const FormSchema = Yup.object().shape({
      nbPers: Yup.number()
        .min(1, `Au moins 1 personne !`)
        .max(nbPers, `Actuellement ${nbPers} personne(s) dans votre foyer. Voulez-vous en rajouter? Go Profil>Ajouter membre ;-)`)
        .required(`Obligatoire ;-)`),
      startDate: Yup.date()
        .required(`Obligatoire ;-)`),
      endDate: Yup.date()
        .required(`Obligatoire ;-)`),
      recycled: Yup.number()
        .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
        .required(`Obligatoire, 0 si pas de déchet... et ça c'est beau ;-)`),
      norecycled: Yup.number()
        .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
        .required(`Obligatoire, 0 si pas de déchet... et ça c'est beau ;-)`),
    })

    Yup.addMethod(Yup.date, 'reverseDate', reverseDate)
    ///////////

    return (
      <FormikWrapper
        fieldNameList={[
          'nbPers', 'startDate', 'endDate', 'recycled', 'norecycled'
        ]}
        fieldTypeList={[
          'number', 'date', 'date', 'number', 'number', 'text'
        ]}
        fieldPlaceholderList={[
          `Nombre de personne concerné`, 
          'Début',
          'Fin',
          'Recyclable poids (ex. 900 = 900g.)',
          'Non recyclables poids (ex. 1250 = 1250g.)',
        ]}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}


const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(WeightForm)