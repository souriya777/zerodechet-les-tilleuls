import React from 'react'

const Portrait = (props) => (
  <div className='portrait'>
    <img src={props.photo} alt='user profile' />
  </div>
)

export default Portrait