import React, { Component } from 'react'
import { connect } from 'react-redux'

import Popup from '../common-ui/Popup'
import { removeError } from './ErrorActions'

class ErrorWatcher extends Component{

  handleClosePopup = () => {
    this.props.dispatch(removeError())
  }

  render() {
    const { errorMsg } = this.props
    if (errorMsg) {
      return (
        <Popup
          title='Oups...'
          onClose={this.handleClosePopup}
        >
          {errorMsg}
        </Popup>
      )
    }
    return ''
  }

}

const mapStateToProps = state => {
  const errorMsg = state.error && state.error.errorMsg 
    ? state.error.errorMsg
    : null

  return { 
    errorMsg: errorMsg
  }
}

export default connect(mapStateToProps)(ErrorWatcher)