import React, { Component } from 'react'

import Card from './Card';

class Popup extends Component {
  state = {
    active: 'popup--active'
  }

  close = () => {
    this.setState({active: ''})
    this.props.onClose()
  }

  render() {
    const { active } = this.state
    const { title, children } = this.props

    return (
      <div className={`popup ${active}`}>
        <Card>
          <div>{title}</div>
          <div className='popup__content'>
            {children}
          </div>
          <div className='popup__action'>
            <button className='btn f__btn' type='submit' onClick={this.close}>
                fermer
              </button>
          </div>
        </Card>
      </div>
    )
  }
}


export default Popup