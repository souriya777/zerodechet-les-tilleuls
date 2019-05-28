import React from 'react'

import TutoHomeForm from './TutoHomeForm'
import TutoGoalForm from './TutoGoalForm'

const TutoAnswer = ({ step, totalStep, onSubmit, onSubmitBack }) => {
  const submitLbl = `Valider étape ${step} sur ${totalStep}`

  if (1 === step) {
    return <TutoHomeForm 
            onSubmit={onSubmit} 
            submitLbl={submitLbl}
          />
  }
  else if (2 === step) {
    return <TutoGoalForm 
            onSubmit={onSubmit} 
            onSubmitBack={onSubmitBack}
            submitLbl={submitLbl}
          />
  }
}

export default TutoAnswer