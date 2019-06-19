import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { findCityAvg } from '../utils/CityHelper'
import { handleSetGoal } from '../user/userActions'

import FormikWrapper from '../utils/FormikWrapper'
import { convertGoalToAvg } from '../stat/StatHelper'

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
    const { onSubmitBack, submitLbl, avg } = this.props
    const { goal } = this.state
    const newAvg = convertGoalToAvg(goal, avg)

    return <>
      <FormikWrapper
        fieldNameList={['goal']}
        fieldTypeList={['range']}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
        onSubmitBack={onSubmitBack}
        sliderValue={goal}
        onSliderChange={this.handleSliderChange}
      >
        <div className='center'>
          <div>soit:</div>
          <h3 className='h3'>
            <div>{newAvg}kg/pers/an</div>
          </h3>
        </div>
      </FormikWrapper>
    </>
  }
}

// no validation for slider
const FormSchema = Yup.object().shape({})

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  
  const cityAvg = findCityAvg(city)

  return {
    avg: cityAvg,
  }
}

export default connect(mapStateToProps)(TutoGoalForm)