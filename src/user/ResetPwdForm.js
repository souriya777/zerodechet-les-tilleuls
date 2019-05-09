import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import IconMail from '../common-ui/icons/IconMail'
import InputPretty from '../common-ui/InputPretty'


export const ResetPwdForm = (props) => (
  <>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputPretty 
            name='email'
            type='email'
            placeholder='e-mail'
            icon={<IconMail />}
          />
          <button className='btn btn--raised' type="submit" disabled={isSubmitting}>
            Envoyer le lien de réinitialisation
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
})

export default ResetPwdForm