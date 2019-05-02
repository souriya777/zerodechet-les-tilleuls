import React from 'react'
import { Formik, Form } from 'formik';

import IconCalendar from '../common-ui/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import Options from '../common-ui/Options'
import { PERIOD_LIST } from './ProgressHelper'

const ProgressForm = (props) => (
  <Formik
    initialValues={{period: props.period}}
  >
    {() => (
      <Form>
        <InputPretty
          name='period'
          type='select'
          value={props.period}
          onChange={props.onChange}
          icon={<IconCalendar />}
          options={<Options items={PERIOD_LIST} />}
        />
      </Form>
    )}
  </Formik>
)

export default ProgressForm