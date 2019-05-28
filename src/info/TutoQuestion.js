import React from 'react'

import { QUESTIONS } from './TutoHelper'

const TutoQuestion = ({ step }) => 
  <div className='tuto__question'>
    {QUESTIONS[step-1]}
  </div>

export default TutoQuestion