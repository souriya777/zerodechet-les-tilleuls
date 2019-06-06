import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleLoadData } from '../utils/sharedActions'

class TutoDemoChoice extends Component {

  handleYes = () => {
    const { uid, history, dispatch } = this.props
    dispatch(handleLoadData(uid, history))
    setTimeout(() => {
      // waiting for firebase...
      this.submit()
    }, 4000)
  }

  handleNo = () => {
    console.log('no')
    this.submit()
  }

  submit() {
    const { onSubmit } = this.props
    console.log('submit')
    onSubmit()
  }

  render() {
    return (
      <div className='tuto__choice'>
        <div>
          Avant votre 1ère visite, nous vous proposons de charger des données de démo... :-)
        </div>
        <div>Voulez-vous?</div>
        <div className='tuto__choice-actions'>
          <button 
            className='btn' 
            type='submit' 
            onClick={this.handleYes}
          >OUI</button>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleNo}
          >NON</button>
        </div>
      </div>
    )
  }
}

export default connect()(withRouter(TutoDemoChoice))