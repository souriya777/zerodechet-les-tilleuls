import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import IconWeight from '../common-ui/IconWeight'
import IconDay from '../common-ui/IconDay'
import IconCalendar from '../common-ui/IconCalendar'
import InputPretty from '../common-ui/InputPretty'

const GarbageWeighForm = (props) => (
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
            placeholder='nombre de jours'><IconDay /></InputPretty>
          <InputPretty 
            name='totalWeight'
            type='number'
            placeholder='Poids total en kg'><IconWeight /></InputPretty>
          <InputPretty 
            name='date'
            type='date'
            placeholder='date'><IconCalendar /></InputPretty>
          <InputPretty
            name='type'
            type='select'
            options={[{}]}><IconLock /></InputPretty>
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


export default GarbageWeighForm