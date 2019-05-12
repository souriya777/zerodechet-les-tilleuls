import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import SmartInput from '../common-ui/SmartInput'
import { isValid } from '../utils/formik-utils'

const UserSigninForm = props => (
  <>
    <Formik
      initialValues={{ email: '', pwd: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <SmartInput 
            type='text' 
            name='email' 
            placeholder='Mon Email' 
            errorMsg={errors.email}
          />

          <SmartInput 
            type='password' 
            name='pwd' 
            placeholder='Mon mot de passe'
            errorMsg={errors.pwd}
          />

          <button className='btn' type="submit" disabled={isSubmitting}>
            valider
          </button>
        </Form>
      )}
    </Formik>
  </>
)

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Entrez une adresse e-mail valide.')
    .required('Une adresse e-mail est obligatoire.'),
  pwd: Yup.string()
    .min(8, 'Votre mot de passe doit contenenir au moins 8 caractères')
    .required('Un mot de passe est obligatoire.')
})


export default UserSigninForm