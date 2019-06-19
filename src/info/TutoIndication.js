import React from 'react'

const TutoIndication = ({ step, total }) => 
  <div className='indication'>
    <h2 className='h2'>Question {step}/{total}</h2>
  </div>

export default TutoIndication