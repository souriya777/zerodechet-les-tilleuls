import React, { Component } from 'react'

import GarbageWeighForm from './GarbageWeighForm'

// TODO
/*
- chain functionnality
- generate json
- call API to save
- save
- next?
*/

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
        <GarbageWeighForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Garbage;