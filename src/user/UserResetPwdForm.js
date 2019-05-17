import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import FormikWrapper from '../utils/FormikWrapper'
import { handleResetPwd } from './userActions'

class ResetPwdForm extends Component {

  handleSubmit = ({email}) => {
    this.props.dispatch(handleResetPwd(email))
  } 

  render () {
    const SubLink = 
      <Link
        className='link link--active' 
        to={ROUTES.signin}
      >&#8627; se connecter</Link>
    return (
      <FormikWrapper
        fieldNameList={['email']}
        fieldTypeList={['text']}
        fieldPlaceholderList={['Mon Email']}
        fieldSubList={[SubLink]}
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
})

export default connect()(ResetPwdForm)