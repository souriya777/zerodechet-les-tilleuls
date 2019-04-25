import React from 'react'
import { Formik, Form } from 'formik';

import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import InputPretty from '../common-ui/InputPretty'

const SigninForm = () => (
  <>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Une adresse e-mail est obligatoire.';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Entrez une adresse e-mail valide.';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputPretty 
            name='email'
            type='email'
            placeholder='e-mail'><IconUser /></InputPretty>
          <InputPretty 
            name='password'
            type='password'
            placeholder='mot de passe'><IconLock /></InputPretty>
          <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
            Connexion
          </button>
        </Form>
      )}
    </Formik>
  </>
)

export default SigninForm