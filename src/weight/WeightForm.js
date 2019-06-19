import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'
import { handleAddWeight } from './weightActions'
import { toISOFormat, DEFAULT_START_DATE, isDefaultStartDate } from '../utils/date-utils'

class WeightForm extends Component {

  handleSubmit = ({ startDate, endDate, recycled, norecycled }) => {
    const { uid, nbPers, history, dispatch } = this.props
    // we don't ask "nb perso" to user, so we get it from props
    console.log('submit', startDate, endDate, recycled, norecycled, uid, nbPers)
    dispatch(handleAddWeight(uid, history, nbPers, startDate, endDate, recycled, norecycled))
  } 

  render () {
    const { uid, lastStartDate } = this.props

    if (uid == null) {
      return null
    }
    
    const formikStartDate = isDefaultStartDate(lastStartDate)
    ? ''
    : toISOFormat(lastStartDate)
    // FIXME deactivate for BETA
    /* 
    fieldValueList={{
      startDate: formikStartDate,
      endDate: '',
      recycled: '',
      norecycled: ''
    }}
    */

    const FormSchema = getFormSchema(lastStartDate, new Date())

    return (
      <FormikWrapper
        fieldNameList={[
          'startDate', 'endDate', 'recycled', 'norecycled'
        ]}
        fieldTypeList={[
          'date', 'date', 'number', 'number'
        ]}
        fieldValueList={{
          startDate: formikStartDate,
          endDate: '',
          recycled: '',
          norecycled: ''
        }}
        fieldPlaceholderList={[
          `Début`,
          'Fin',
          'Recyclable en gr. (ex. 900 = 900g.)',
          'Non recyclables en gr.',
        ]}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const getFormSchema = (lastStartDate, now) => {
  console.log(lastStartDate, now)
  return Yup.object().shape({
    startDate: Yup.date()
      .min(lastStartDate, `Vous avez déjà saisi une pesée pour cette période.`)
      .max(now, `La date de début ne peut être supérieure à la date de fin ou à la date du jour.`)
      .required(`Requis !`),
    endDate: Yup.date()
      // FIXME
      // .when('startDate', (st, schema) => {
      //   return Yup.date()
      //   .min(st, `La fin ne peut être inférieure au début`)
      //   .max(now, `Vous ne pouvez saisir de pesée qui ne se sont pas encore passées.`)
      // })
      .required(`Requis !`),
    recycled: Yup.number()
      .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
      .required(`Requis, 0 si pas de déchet...`),
    norecycled: Yup.number()
      .min(0, `C'est l'idéal de tout aventurier du Défi famille...`)
      .required(`Requis, 0 si pas de déchet...`),
  })
}

const mapStateToProps = state => { 
  const { user, weight } = state

  const uid = user ? user.uid : null
  const nbPers = user ? user.nbPers : null
  const lastStartDate = weight ? weight.lastStartDate : null
  
  const finalStartDate = lastStartDate ? lastStartDate : DEFAULT_START_DATE

  
  return { 
    uid,
    nbPers,
    lastStartDate: finalStartDate,
  }
}

export default connect(mapStateToProps)(withRouter(WeightForm))