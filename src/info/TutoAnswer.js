import React from 'react'

import TutoNbPersForm from './TutoNbPersForm'
import TutoGoalForm from './TutoGoalForm'
import TutoCityForm from './TutoCityForm'

const TutoAnswer = ({ step, onSubmit }) => {

  if (1 === step) {
    return <TutoNbPersForm onSubmit={onSubmit} />
  }
  else if (2 === step) {
    return <TutoCityForm onSubmit={onSubmit} />
  }
  else if (3 === step) {
    return <TutoGoalForm onSubmit={onSubmit} />
  }
}

export default TutoAnswer