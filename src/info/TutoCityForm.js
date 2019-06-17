import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetCity } from '../user/userActions'
import FormikWrapper from '../utils/FormikWrapper'
import { CITY } from '../utils/CityHelper'

class TutoCityForm extends Component {

  handleSubmit = ({ city }) => {
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetCity(city))
    onSubmit()
  }

  render() {
    return (
      <FormikWrapper
        fieldNameList={['city']}
        fieldTypeList={['select']}
        fieldPlaceholderList={['Commune']}
        fieldValueList={{
          city: CITY.keyList[0]
        }}
        optionLabelList={CITY.labelList}
        optionIdList={CITY.keyList}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
})

export default connect()(TutoCityForm)