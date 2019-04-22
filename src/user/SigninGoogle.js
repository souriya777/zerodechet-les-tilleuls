import React, { Component } from 'react'

class SigninGoogle extends Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
  }

  render () {
    return (
      <button type="submit" onClick={this.handleSubmit}>Se connecter avec Google</button>
    )
  }
}

export default SigninGoogle