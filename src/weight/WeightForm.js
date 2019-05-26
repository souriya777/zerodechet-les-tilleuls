import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'
import { handleAddWeight } from './weightActions'

class WeightForm extends Component {

  handleSubmit = ({nbPers, startDate, endDate, recycled, norecycled}) => {
    const { user, dispatch } = this.props
    dispatch(handleAddWeight(user.uid, nbPers, startDate, endDate, recycled, norecycled))
  } 

  render () {
    return (
      <FormikWrapper
        fieldNameList={[
          'nbPers', 'startDate', 'endDate', 'recycled', 'norecycled'
        ]}
        fieldTypeList={[
          'number', 'date', 'date', 'number', 'number', 'text'
        ]}
        fieldPlaceholderList={[
          'Nombre de personne concerné', 
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

const FormSchema = Yup.object().shape({
  nbPers: Yup.number()
    .min(1, 'Au moins une personne du foyer est concerné')
    .required('Le nombre de personne est obligatoire'),
  startDate: Yup.string()
    .required('La date de début est obligatoire'),
  endDate: Yup.string()
    .required('La date de fin est obligatoire'),
  recycled: Yup.string()
    .required('Le poids est obligatoire (0 si pas de déchet)'),
  norecycled: Yup.string()
    .required('Le poids est obligatoire (0 si pas de déchet)'),
})

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(WeightForm)