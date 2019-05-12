import { isValid } from './formik-utils'

const FORMIK_ERRORS = {
  'email' : true,
}

describe(`isValid`, () => {

  it(`returns true for email`, () => {
    const isFieldOK = isValid(FORMIK_ERRORS, 'email');
    expect(isFieldOK).toBeTruthy()
  })

  it(`returns true for pwd`, () => {
    const isFieldOK = isValid(FORMIK_ERRORS, 'pwd');
    expect(isFieldOK).toBeFalsy()
  })
})