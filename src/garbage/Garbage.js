import React, { Component } from 'react'

import GarbageForm from './GarbageForm'

export const GarbageHeader = () => (
  <div className="garbage__header">
    <h1 className='h1'>Peser des déchets</h1>
  </div>
)

export class Garbage extends Component {

  handleSubmit = () => {
    console.log('submit');
  } 

  render () {
    return (
      <div className='garbage__content'>
        <GarbageForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Garbage;