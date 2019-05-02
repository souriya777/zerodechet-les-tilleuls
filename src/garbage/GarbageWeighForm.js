import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/IconUser'
import IconGarbage from '../common-ui/IconGarbage'
import IconWeight from '../common-ui/IconWeight'
import IconDay from '../common-ui/IconDay'
import IconCalendar from '../common-ui/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import Options from '../common-ui/Options'
import { DEFAULT_GARBAGE_TYPE, GARBAGE_LIST } from './GarbageHelper'

const GarbageWeighForm = (props) => (
  <Formik
    initialValues={{ nbPers: '', nbDays: '', totalWeight: '', date: '', type: DEFAULT_GARBAGE_TYPE }}
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
          placeholder='nombre de personnes'
          icon={<IconUser />} 
        />
        <InputPretty 
          name='nbDays'
          type='number'
          placeholder='nombre de jours'
          icon={<IconDay />} 
        />
        <InputPretty 
          name='totalWeight'
          type='number'
          placeholder='Poids total en kg'
          icon={<IconWeight />} 
        />
        <InputPretty 
          name='date'
          type='date'
          placeholder='date'
          icon={<IconCalendar />} 
        />
        <InputPretty
          name='type'
          type='select'
          value={DEFAULT_GARBAGE_TYPE}
          onChange={props.onChange}
          icon={<IconGarbage />}
          options={<Options items={GARBAGE_LIST} />}
        />
        <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
          Sauvegarder
        </button>
      </Form>
    )}
  </Formik>
)

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