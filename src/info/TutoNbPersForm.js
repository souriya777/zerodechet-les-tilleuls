import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetNbPers } from '../user/userActions'

import FormikWrapper from '../utils/FormikWrapper'

class TutoNbPersForm extends Component {
  handleSubmit = ({ nbPers }) => {
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetNbPers(nbPers))
    onSubmit()
  }

  render() {
    const { submitLbl } = this.props
    
    return (
      <FormikWrapper
        fieldNameList={['nbPers']}
        fieldTypeList={['number']}
        fieldPlaceholderList={['Nombre de personnes (dont vous)']}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  nbPers: Yup.number()
    .min(1, `vous... et?`)
    .max(69, `Le record du nombre d'enfant est de 69, mais quand même!`)
    .required('Obligatoire ;-)'),
})

export default connect()(TutoNbPersForm)