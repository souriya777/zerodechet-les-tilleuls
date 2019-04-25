import React, { Component } from 'react'

import UserHabitsForm from './UserHabitsForm'

export const UserHabitsHeader = () => (
  <div className="UserHabits__header">
    <h1 className='h1'>Vos habitudes</h1>
  </div>
)

class UserHabits extends Component {

  handleSubmit = () => {
    console.log('user habits handleSubmti()');
  } 
  render () {
    return(
      <div className='user-habits__content'>
        <UserHabitsForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default UserHabits;