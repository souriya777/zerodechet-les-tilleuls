import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import IconWeight from '../common-ui/IconWeight'
import IconDay from '../common-ui/IconDay'
import IconCalendar from '../common-ui/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import { generateOption } from '../utils/ui-utils'

const GarbageWeighForm = (props) => {
  const typeOptions = generateOption (
    [
      ['recyclable', 'Recyclable'], 
      ['norecyclable', 'Non recyclable']
    ]
  )

  // FIXME make it more dynamic...
  const defaultType = 'norecyclable'

  return (
    <>
      <Formik
        initialValues={{ nbPers: '', nbDays: '', totalWeight: '', date: '', type: defaultType }}
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
              value={defaultType}
              options={typeOptions}><IconLock /></InputPretty>
            <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
              Sauvegarder
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

const FormSchema = Yup.object().shape({
  nbPers: Yup.number()
    .required('Le nombre de personnes est obligatoire.'),
  nbDays: Yup.number()
      .required('Le nombre de jour est obligatoire.'),
  totalWeight: Yup.number()
      .required('Le poids total est obligatoire.'),
  date: Yup.date()
      .required('La date est obligatoire.'),
  type: Yup.string()
      .required('Le type de déchet est obligatoire.'),
});


export default GarbageWeighForm