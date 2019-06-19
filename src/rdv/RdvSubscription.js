import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSubRdv, handleUnsubRdv, handleWaitRdv } from './rdvActions'

class RdvSubscription extends Component {

  handleSubRdvClick = () => {
    const { id, dispatch } = this.props
    dispatch(handleSubRdv(id))
  }

  handleUnsubRdvClick = () => {
    const { id, dispatch } = this.props
    dispatch(handleUnsubRdv(id))
  }

  handleWaitRdvClick = () => {
    const { id, dispatch } = this.props
    dispatch(handleWaitRdv(id))
  }

  render() {
    const { userSubscribed, wait4, count, maxCount } = this.props

    const diff = maxCount - count

    if (userSubscribed) {
      const lbl = wait4 
        ? `Se désinscrire de la liste d'attente`
        : 'Se désinscrire'

      return <button 
              className='btn btn--small rdv--unsub' 
              onClick={this.handleUnsubRdvClick}
            >
              {lbl}
            </button>
    }
  
    if (diff >= 1) 
      return <button 
              className='btn btn--small rdv--sub'
              onClick={this.handleSubRdvClick}
            >
              S'inscrire
            </button>
    else 
      return <button 
              className='btn btn--small rdv--wait'
              onClick={this.handleWaitRdvClick}
            >
              Être sur liste d'attente
            </button>
  }
}

export default connect()(RdvSubscription)