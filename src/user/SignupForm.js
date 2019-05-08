import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/icons/IconUser'
import IconLock from '../common-ui/icons/IconLock'
import IconMail from '../common-ui/icons/IconMail'
import InputPretty from '../common-ui/InputPretty'

const SignupForm = (props) => (
  <>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', pwd: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputPretty 
            name='firstName'
            type='text'
            placeholder='prénom'
            icon={<IconUser />}
          />
          <InputPretty 
            name='lastName'
            type='text'
            placeholder='nom'
            icon={<IconUser />}
          />
          <InputPretty 
            name='email'
            type='email'
            placeholder='e-mail'
            icon={<IconMail />}
          />
          <InputPretty 
            name='pwd'
            type='password'
            placeholder='mot de passe'
            icon={<IconLock />}
          />

          <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
            Inscription
          </button>
        </Form>
      )}
    </Formik>
  </>
)

// FIXME factorize
const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Un prénom est obligatoire.'),
  lastName: Yup.string()
    .required('Un nom de famille est obligatoire.'),
  email: Yup.string()
    .email('Entrez une adresse e-mail valide.')
    .required('Une adresse e-mail est obligatoire.'),
  pwd: Yup.string()
    .min(8, 'Votre mot de passe doit contenenir au moins 8 caractères')
    .required('Un mot de passe est obligatoire.')
});


export default SignupForm