import React, { Component } from 'react'
import { connect } from 'react-redux'

import WeightForm from './WeightForm'

class Weight extends Component {

  render() {
    const { user } = this.props
    const nbPers = user != null ? user.home.length + 1 : 1

    return (
      <div className='weight'>
        <h1 className='h1'>La pesée</h1>
        <div className='weight__form'>
          <WeightForm
            nbPers={nbPers}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Weight)