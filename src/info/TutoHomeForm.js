import React from 'react'
import * as Yup from 'yup'

import FormikWrapper from '../utils/FormikWrapper'

const TutoHomeForm = ({ onSubmit, submitLbl }) => 
  <FormikWrapper
    fieldNameList={['nbPers']}
    fieldTypeList={['number']}
    fieldPlaceholderList={['Nombre de personnes (dont vous)']}
    formSchema={FormSchema}
    submitLbl={submitLbl}
    onSubmit={onSubmit}
  />

const FormSchema = Yup.object().shape({
  nbPers: Yup.number()
    .min(1, `vous... et?`)
    .max(69, `Le record du nombre d'enfant est de 69, mais quand même!`)
    .required('Obligatoire ;-)'),
})

export default TutoHomeForm