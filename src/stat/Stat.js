import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import StatGraph from './StatGraph';

class Stat extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div className='stat'>
        <h1 className='h1'>Stats de la semaine</h1>
        <div className='stat__graph'>
          <StatGraph />
        </div>
        <div className='stat__action'>
          <select className='select' >
            <option>cette semaine</option>
            <option>ce mois</option>
            <option>ce trimestre</option>
          </select>
          <button className='btn' type='submit' onClick={this.handleLoadFakeData}>
            Cette semaine
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Stat)