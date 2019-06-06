import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetGoal } from '../user/userActions'

import FormikWrapper from '../utils/FormikWrapper'

class TutoGoalForm extends Component {
  handleSubmit = ({ goal }) => {
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetGoal(goal))
    onSubmit()
  }

  render() {
    const { onSubmitBack, submitLbl } = this.props

    return (
      <FormikWrapper
        fieldNameList={['goal']}
        fieldTypeList={['number']}
        fieldPlaceholderList={['Poids en gramme (ex. 300 = 300g/jr/pers)']}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
        onSubmitBack={onSubmitBack}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  goal: Yup.number()
    .required('Obligatoire ;-)'),
})

export default connect()(TutoGoalForm)