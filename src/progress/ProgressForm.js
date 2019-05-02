import React from 'react'
import { Formik, Form } from 'formik';

import IconCalendar from '../common-ui/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import Options from '../common-ui/Options'
import { DEFAULT_PERIOD, PERIOD_LIST } from './ProgressHelper'

const ProgressForm = (props) => (
  <Formik
    initialValues={{period: DEFAULT_PERIOD}}
  >
    {() => (
      <Form>
        <InputPretty
          name='period'
          type='select'
          value={DEFAULT_PERIOD}
          onChange={props.onChange}
          icon={<IconCalendar />}
          options={<Options items={PERIOD_LIST} />}
        />
      </Form>
    )}
  </Formik>
)

export default ProgressForm