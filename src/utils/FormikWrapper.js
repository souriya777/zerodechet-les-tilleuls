import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import SmartInput from '../common-ui/SmartInput'
import SmartInputRange from '../common-ui/SmartInputRange'
import SmartSelect from '../common-ui/SmartSelect'


class FormikWrapper extends Component {

  state = {
    userHasValidateOnce: false
  }

  handleClickSubmit = () => {
    this.setState({userHasValidateOnce: true})
  }

  initValues = fieldNameList => {
    let result = {}
    fieldNameList.map(fName => result[fName] = '')
    return result
  }

  fillEmptyList = (list, size) => {
    return list === undefined 
      ? new Array(size).fill(undefined) 
      : list
  }

  render () {
    const { onSubmit } = this.props
    const { fieldNameList, fieldTypeList, fieldValueList, fieldPlaceholderList } = this.props
    const { optionIdList, optionLabelList } = this.props
    const { sliderValue, onSliderChange } = this.props
    
    const nbOfFields = fieldNameList.length
    const fieldSubList = this.fillEmptyList(this.props.fieldSubList, nbOfFields)
    const fieldAutocompleteList = this.fillEmptyList(this.props.fieldAutocompleteList, nbOfFields)
    
    const { formSchema } = this.props
    const { userHasValidateOnce } = this.state
    
    const initialValues = fieldValueList ? fieldValueList : this.initValues(fieldNameList)
    
    // extra content
    const { children } = this.props

    return (
      <>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={formSchema}
          validateOnChange={userHasValidateOnce}
          validateOnBlur={userHasValidateOnce}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {fieldNameList.map((fieldName, i) => {
                if ('select' === fieldTypeList[i]) {
                  return (
                    <SmartSelect
                      options={optionLabelList}
                      name={fieldName}
                      ids={optionIdList}
                      placeholder={fieldPlaceholderList[i]}
                      formikMode={true}
                    />
                  )
                } else if ('range' === fieldTypeList[i]) {
                  return <SmartInputRange value={sliderValue} isNegative={true} unity={'%'} onChange={ onSliderChange } />
                } else {
                  return (
                    <SmartInput 
                      type={fieldTypeList[i]} 
                      name={fieldName} 
                      placeholder={fieldPlaceholderList[i]} 
                      errorMsg={errors[fieldName]}
                      sub={fieldSubList[i]}
                      autocomplete={fieldAutocompleteList[i]}
                      key={i}
                    />
                  )
                }
              })}

              <div className='form__before-submit'>
                { children }
              </div>

              <div className='form__validation'>
                <button 
                  className='btn' 
                  type='submit' 
                  disabled={isSubmitting}
                  onClick={this.handleClickSubmit}
                >
                  valider
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    )
  }
}

export default FormikWrapper