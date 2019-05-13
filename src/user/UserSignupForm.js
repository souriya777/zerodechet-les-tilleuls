import React, { Component } from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import FormikWrapper from '../utils/FormikWrapper'
import { handleSignup } from './userActions'

class UserSignupForm extends Component {

  handleSubmit = ({firstName, lastName, email, pwd}) => {
    this.props.dispatch(handleSignup(firstName, lastName, email, pwd))
  }

  render() {
    return (
      <FormikWrapper
        fieldNameList={['firstName', 'lastName', 'email', 'pwd']}
        fieldPlaceholderList={['Prénom', 'Nom', 'Mon Email', 'Mon mot de passe']}
        fieldTypeList={['text', 'text', 'text', 'password']}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Un prénom est obligatoire.'),
  lastName: Yup.string()
    .required('Un nom est obligatoire.'),
  email: Yup.string()
    .email('Entrez une adresse e-mail valide.')
    .required('Une adresse e-mail est obligatoire.'),
  pwd: Yup.string()
    .min(8, 'Votre mot de passe doit contenenir au moins 8 caractères')
    .required('Un mot de passe est obligatoire.')
})

export default connect()(UserSignupForm)