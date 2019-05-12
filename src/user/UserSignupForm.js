import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import SmartInput from '../common-ui/SmartInput'

const UserSignupForm = ({ onSubmit }) => (
  <>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', pwd: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <SmartInput 
            type='text' 
            name='firstName' 
            placeholder='Prénom' 
            errorMsg={errors.firstName}
          />

          <SmartInput 
            type='text' 
            name='lastName' 
            placeholder='Nom' 
            errorMsg={errors.lastName}
          />

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

          <div className="form__validation">
            <button className={`btn`} type="submit" disabled={isSubmitting}>
              valider
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
)

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


export default UserSignupForm