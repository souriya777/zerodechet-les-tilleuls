import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetCity } from '../user/userActions'
import FormikWrapper from '../utils/FormikWrapper'
import { CITY, CITY_LABEL } from './TutoHelper'

class TutoCityForm extends Component {

  handleSubmit = ({ city }) => {
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetCity(city))
    onSubmit()
  }

  render() {
    const { onSubmitBack, submitLbl } = this.props

    return (
      <FormikWrapper
        fieldNameList={['city']}
        fieldTypeList={['select']}
        fieldPlaceholderList={['Commune']}
        fieldValueList={{
          city: CITY[0]
        }}
        optionLabelList={CITY_LABEL}
        optionIdList={CITY}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
        onSubmitBack={onSubmitBack}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
})

export default connect()(TutoCityForm)