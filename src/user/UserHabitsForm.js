import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import InputPretty from '../common-ui/InputPretty'

const UserHabitsForm = (props) => (
  <>
    <Formik
      initialValues={{ email: '', pwd: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputPretty 
            name='nbPers'
            type='nombre de personnes'
            placeholder=''><IconUser /></InputPretty>
          <InputPretty 
            name='nbChildren'
            type='text'
            placeholder='nombre denfants'><IconLock /></InputPretty>
          <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
            Enregistrer
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
});


export default UserHabitsForm