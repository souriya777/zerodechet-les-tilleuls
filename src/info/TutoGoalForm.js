import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { CITY, CITY_AVG } from '../utils/CityHelper'
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
    const { onSubmitBack, submitLbl, avg } = this.props
    const { goal } = this.state
    const newAvg = Math.floor(avg * goal / 100)

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
        <div className='paragraph'>
          <div>soit:</div>
        </div>
        <div className='paragraph paragraph--highlighted'>{newAvg}kg/pers/an</div>
      </FormikWrapper>
    </>
  }
}

// no validation for slider
const FormSchema = Yup.object().shape({})

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  
  let cityAvg = null
  if (city) {
    const idx = CITY.indexOf(city)

    cityAvg = CITY_AVG[idx]
  }

  return {
    avg: cityAvg,
  }
}

export default connect(mapStateToProps)(TutoGoalForm)