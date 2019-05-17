import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from './userActions'
import { handleLoadData } from '../utils/sharedActions'
import Button from '../common-ui/Button'
import MemberList from './MemberList'

class UserProfileOLD extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadData = e => {
    this.props.dispatch(handleLoadData())
  }

  render() {
    // const { user } = this.props
    // remove when dynamized
    const user = {
      uid: "uebilBofedWTOu7ZCkNySkg8qxB3",
      email: "laosoupi59@gmail.com",
      name: "Souriya Phongsavanh",
      photo: "https://lh3.googleusercontent.com/-NvIwRG-KKOc/AAAAAAAAAAI/AAAAAAABIUo/o313nBEskvE/photo.jpg",
      "home": [
        {"id": 1, "name": "Somsack Phongsavanh"},
        {"id": 2, "name": "Somvilack Phongsavanh"},
        {"id": 3, "name": "Sourideth Phongsavanh"},
        {"id": 4, "name": "Soucksakhone Phongsavanh"},
        {"id": 5, "name": "Souriya Phongsavanh"},
        {"id": 6, "name": "Sourisack Phongsavanh"}
      ],
      "goal": 0.250
    }
    

    return (
      <div className='content-grid'>
        <h2 className='h2'>Objectif</h2>
        <p className='hilighted u-center-content'>
          {user.goal}kg/hab/jour
        </p>

        <h2 className='h2'>Membres:</h2>
        <MemberList items={user.home} />

        <div className="profile__actions">
          <Button 
            transparency={true}
            onSubmit={this.handleLoadData}>Charger les données test</Button>
          <br/>
          <Button 
            transparency={true}
            onSubmit={this.handleSignout}
          >Se déconnecter</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps)(UserProfileOLD)