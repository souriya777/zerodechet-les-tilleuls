import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'
import { handleAddWeight } from './weightActions'
import { toStandardFormat, lastYear } from '../utils/date-utils'


class WeightForm extends Component {
  handleSubmit = ({nbPers, startDate, endDate, recycled, norecycled}) => {
    const { user, dispatch } = this.props
    dispatch(handleAddWeight(user.uid, nbPers, startDate, endDate, recycled, norecycled))
  } 

  render () {
    const { user, weight } = this.props
    let lastStartDate, defaultStartDate

    console.log(user, weight)

    const nbPers = user.nbPers

    if (weight != null) {
      lastStartDate = weight.lastStartDate
      defaultStartDate = toStandardFormat(lastStartDate)
    } else {
      lastStartDate = lastYear(new Date())
      defaultStartDate = ''
    }

    console.log(lastStartDate, defaultStartDate)

    const FormSchema = getFormSchema(nbPers, lastStartDate, new Date())

    return (
      <FormikWrapper
        fieldNameList={[
          'nbPers', 'startDate', 'endDate', 'recycled', 'norecycled'
        ]}
        fieldTypeList={[
          'number', 'date', 'date', 'number', 'number', 'text'
        ]}
        fieldValueList={{
          nbPers,
          startDate: defaultStartDate,
          endDate: '',
          recycled: '',
          norecycled: ''
        }}
        fieldPlaceholderList={[
          `Nombre de personne(s) concernée(s)`, 
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

const getFormSchema = (nbPers, lastStartDate, now) => {
  return Yup.object().shape({
    nbPers: Yup.number()
      .min(1, `Au moins 1 personne !`)
      .max(nbPers, `Actuellement ${nbPers} personne(s) dans votre foyer ;-)`)
      .required(`Obligatoire ;-)`),
    startDate: Yup.date()
      .min(lastStartDate, `Vous avez déjà saisi une pesée pour cette période.`)
      .max(now, `La date de début ne peut être supérieure à la date de fin ou à la date du jour.`)
      .required(`Obligatoire ;-)`),
    endDate: Yup.date()
      .when('startDate', (st, schema) => {
        return Yup.date()
        .min(st, `Retour vers le futur? La fin ne peut être inférieure au début ;-)`)
        .max(now, `Vous ne pouvez saisir de pesée qui ne se sont pas encore passées.`)
      })
      .required(`Obligatoire ;-)`),
    recycled: Yup.number()
      .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
      .required(`Obligatoire, 0 si pas de déchet... et ça c'est beau ;-)`),
    norecycled: Yup.number()
      .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
      .required(`Obligatoire, 0 si pas de déchet... et ça c'est beau ;-)`),
  })
}


const mapStateToProps = state => { 
  return { 
    user: state.user,
    weight: state.weight 
  }
}

export default connect(mapStateToProps)(WeightForm)