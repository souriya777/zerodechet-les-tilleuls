import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { handleSetNbPers } from '../user/userActions'

import FormikWrapper from '../utils/FormikWrapper'

class TutoNbPersForm extends Component {
  handleSubmit = ({ nbPers }) => {
    const { onSubmit, dispatch } = this.props
    dispatch(handleSetNbPers(nbPers))
    onSubmit()
  }

  render() {
    const { submitLbl, nbPers } = this.props
    console.log(nbPers)


    return (
      <FormikWrapper
        fieldNameList={['nbPers']}
        fieldTypeList={['number']}
        fieldPlaceholderList={['Nombre de personnes (dont vous)']}
        fieldValueList={{
          nbPers
        }}
        formSchema={FormSchema}
        submitLbl={submitLbl}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const FormSchema = Yup.object().shape({
  nbPers: Yup.number()
    .min(1, `vous... et?`)
    .max(69, `Le record du nombre d'enfant est de 69, mais quand même!`)
    .required('À remplir !'),
})

const mapStateToProps = state => { 
  const { user } = state

  const nbPers = user ? user.nbPers : 0
  
  return { 
    nbPers,
  }
}

export default connect(mapStateToProps)(TutoNbPersForm)