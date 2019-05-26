import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import FormikWrapper from '../utils/FormikWrapper'
import { handleSigninWithEmailAndPwd } from './userActions'

class UserSigninForm extends Component {

  handleSubmit = ({email, pwd}) => {
    this.props.dispatch(handleSigninWithEmailAndPwd(email, pwd))
  } 

  render () {
    const SubLink = 
      <Link
        className='link link--active' 
        to={ROUTES.resetPwd}
      >Mot de passe oublié</Link>

    return (
      <FormikWrapper
        fieldNameList={['email', 'pwd']}
        fieldTypeList={['text', 'password']}
        fieldPlaceholderList={['Mon Email', 'Mon mot de passe']}
        fieldSubList={[undefined, SubLink]}
        fieldAutocompleteList={['username', 'current-password']}
        formSchema={FormSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Entrez une adresse e-mail valide.')
    .required('Une adresse e-mail est obligatoire.'),
  pwd: Yup.string()
    .min(8, 'Votre mot de passe doit contenenir au moins 8 caractères')
    .required('Un mot de passe est obligatoire.')
})

export default connect()(UserSigninForm)