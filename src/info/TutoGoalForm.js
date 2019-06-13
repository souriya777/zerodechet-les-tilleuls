import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetGoal } from '../user/userActions'

import FormikWrapper from '../utils/FormikWrapper'

class TutoGoalForm extends Component {

  state = {
    goal: 50
  }

  handleSubmit = () => {
    const { goal } = this.state
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetGoal(goal))
    onSubmit()
  }

  handleSliderChange = v => {
    this.setState({ goal: v })
  }

  render() {
    const { onSubmitBack, submitLbl } = this.props
    const { goal } = this.state

    return (
      <FormikWrapper
        fieldNameList={['goal']}
        fieldTypeList={['range']}
        fieldPlaceholderList={['Poids en gramme (ex. 300 = 300g/jr/pers)']}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
        onSubmitBack={onSubmitBack}
        sliderValue={goal}
        onSliderChange={this.handleSliderChange}
      />
    )
  }
}

// no validation for slider
const FormSchema = Yup.object().shape({})

export default connect()(TutoGoalForm)