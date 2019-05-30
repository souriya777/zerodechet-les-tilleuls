import React from 'react'

import TutoNbPersForm from './TutoNbPersForm'
import TutoGoalForm from './TutoGoalForm'

const TutoAnswer = ({ step, totalStep, onSubmit, onSubmitBack }) => {
  const submitLbl = `Valider étape ${step} sur ${totalStep}`

  if (1 === step) {
    return <TutoNbPersForm 
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