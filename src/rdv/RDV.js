import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'

// import TimePicker from 'react-gradient-timepicker'

class RDV extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleChange = time => {
    console('val:' + time.format24)
  }

  render() {
    const theme = 'Mojito'
    // const theme = 'Quepal'

    return (
      <div className='rdv'>
        RDV
        {/* <TimePicker
          time='01:00'
          theme={theme}
          className='timepicker'
          placeholder='Heure de début'
          onSet={val => this.handleChange}
        /> */}
      </div>
    )
  }
}

export default connect()(RDV)