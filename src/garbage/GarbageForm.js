import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import InputPretty from '../common-ui/InputPretty'

const SigninForm = (props) => (
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
            type='number'
            placeholder='nombre de personnes'><IconUser /></InputPretty>
          <InputPretty 
            name='nbDays'
            type='number'
            placeholder='nombre de jours'><IconLock /></InputPretty>
          <InputPretty 
            name='totalWeight'
            type='number'
            placeholder='Poids total en kg'><IconLock /></InputPretty>
          <InputPretty 
            name='date'
            type='date'
            placeholder='date'><IconLock /></InputPretty>
          <Field component="select" name="type">
            <option value="recyclable">Recyclable</option>
            <option value="norecyclable">Non recyclable</option>
          </Field>
          <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
            Sauvegarder
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


export default SigninForm