import React, { Component } from 'react'
import { connect } from 'react-redux'

import Popup from '../common-ui/Popup'
import { removeInfo } from './InfoActions'

class InfoWatcher extends Component{

  handleClosePopup = () => {
    this.props.dispatch(removeInfo())
  }

  render() {
    const { infoMsg } = this.props
    if (infoMsg) {
      return (
        <Popup
          title='Félicitation :)'
          onClose={this.handleClosePopup}
        >
          {infoMsg}
        </Popup>
      )
    }
    return ''
  }

}

const mapStateToProps = state => {
  const infoMsg = state.info && state.info.infoMsg 
    ? state.info.infoMsg
    : null

  return { 
    infoMsg: infoMsg
  }
}

export default connect(mapStateToProps)(InfoWatcher)