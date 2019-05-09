import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/icons/IconUser'
import IconWeight from '../common-ui/icons/IconWeight'
import IconDay from '../common-ui/icons/IconDay'
import IconCalendar from '../common-ui/icons/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import Options from '../common-ui/Options'
import { DEFAULT_WEIGHT_TYPE, WEIGHT_LIST } from './WeightHelper'

const WeightForm = (props) => (
  <Formik
    initialValues={{ nbPers: '', nbDays: '', totalWeight: '', date: '', type: DEFAULT_WEIGHT_TYPE }}
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
          value={DEFAULT_WEIGHT_TYPE}
          onChange={props.onChange}
          icon={<IconWeight />}
          options={<Options items={WEIGHT_LIST} />}
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


export default WeightForm