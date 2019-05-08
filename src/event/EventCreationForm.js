import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import IconUser from '../common-ui/icons/IconUser'
import IconWeight from '../common-ui/icons/IconWeight'
import IconDay from '../common-ui/icons/IconDay'
import IconCalendar from '../common-ui/icons/IconCalendar'
import InputPretty from '../common-ui/InputPretty'

const EventCreationForm = (props) => (
  <Formik
    initialValues={{ nbPers: '', nbDays: '', totalWeight: '', date: '' }}
    validationSchema={FormSchema}
    onSubmit={(values, { setSubmitting }) => {
      props.onSubmit(values)
      setSubmitting(true)
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <InputPretty 
          name='title'
          type='text'
          placeholder='Titre'
          icon={<IconUser />} 
        />
        <InputPretty 
          name='nbPlaces'
          type='number'
          placeholder='Nombre de places disponibles'
          icon={<IconDay />} 
        />
        <InputPretty 
          name='startDate'
          type='datetime'
          placeholder='Début'
          icon={<IconWeight />} 
        />
        {/* TODO hour */}
        <InputPretty 
          name='endDate'
          type='datetime'
          placeholder='Fin'
          icon={<IconCalendar />} 
        />
        <InputPretty 
          name='where'
          type='text'
          placeholder='Où?'
          icon={<IconCalendar />} 
        />
        <InputPretty 
          name='opened'
          type='text'
          placeholder='Ouvert à toute la famille'
          icon={<IconCalendar />} 
        />
        <InputPretty 
          name='desc'
          type='textarea'
          placeholder='Description'
          icon={<IconCalendar />} 
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


export default EventCreationForm