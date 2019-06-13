import React from 'react'

import TutoCityQuestion from './TutoCityQuestion'
import TutoNbPersQuestion from './TutoNbPersQuestion'
import TutoGoalQuestion from './TutoGoalQuestion'

const TutoQuestion = ({ step }) => {
  if (1 === step) {
    return <TutoNbPersQuestion />
  }
  else if (2 === step) {
    return <TutoCityQuestion />
  }
  else if (3 === step) {
    return <TutoGoalQuestion />
  }
}
export default TutoQuestion