import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'
// import { handleSigninWithEmailAndPwd } from './userActions'
import { DEFAULT_WEIGHT_TYPE, WEIGHT_LIST } from './WeightHelper'

class WeightForm extends Component {

  handleSubmit = ({email, pwd}) => {
    // this.props.dispatch(handleSigninWithEmailAndPwd(email, pwd))
  } 

  render () {
    return (
      <FormikWrapper
        fieldNameList={
          ['nbPers', 'nbDays', 'totalWeight', 'startDate', 'endDate', 'type']
        }
        fieldPlaceholderList={
          [
            'Nombre de personne', 
            'Nombre de jours',
            'Poids total en gramme',
            'Date de début',
            'Date de fin',
            'Type de déchet'
          ]
        }
        fieldTypeList={['text', 'password', 'text', 'text', 'text', 'text']}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  nbPers: Yup.string()
    .min(1, 'Au moins une personne du foyer est concerné')
    .required('Le nombre de personne est obligatoire'),
  nbDays: Yup.string()
    .required('Le nombre de jour est obligatoire'),
  totalWeight: Yup.string()
    .required('Le poids est obligatoire'),
  startDate: Yup.string()
    .required('La date de début est obligatoire'),
  endDate: Yup.string()
    .required('La date de fin est obligatoire'),
  type: Yup.string()
    .required('Le type de déchet est obligatoire')
})

export default connect()(WeightForm)