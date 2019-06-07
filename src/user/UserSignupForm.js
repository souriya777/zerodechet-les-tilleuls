import React, { Component } from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import FormikWrapper from '../utils/FormikWrapper'
import { handleSignup } from './userActions'

class UserSignupForm extends Component {

  handleSubmit = ({name, email, pwd}) => {
    this.props.dispatch(handleSignup(name, email, pwd))
  }

  render() {
    return (
      <FormikWrapper
        fieldNameList={['name', 'email', 'pwd']}
        fieldTypeList={['text', 'text', 'password']}
        fieldPlaceholderList={[`Nom d'utilisateur`, 'Email', 'Mot de passe']}
        fieldAutocompleteList={[undefined, undefined, 'username', 'current-password']}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('À remplir !'),
  email: Yup.string()
    .email('Entrez une adresse e-mail valide.')
    .required(`À remplir !`),
  pwd: Yup.string()
    .min(8, 'Votre mot de passe doit contenenir au moins 8 caractères')
    .required('À remplir !')
})

export default connect()(UserSignupForm)