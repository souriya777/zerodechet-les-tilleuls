import React from 'react'
import { connect } from 'react-redux'

import { PERIOD, PERIOD_LABEL } from './StatHelper'

import SmartSelect from '../common-ui/SmartSelect'

const StatSelect = ({ stat, onChangePeriod }) => {
  if (stat == null) {
    return null
  }
 
  return (
    <SmartSelect
      options={[
        PERIOD_LABEL[PERIOD.WEEK], 
        PERIOD_LABEL[PERIOD.MONTH], 
        PERIOD_LABEL[PERIOD.TRIMESTER]
      ]}
      ids={[
        PERIOD.WEEK, 
        PERIOD.MONTH, 
        PERIOD.TRIMESTER
      ]}
      placeholder='Période'
      onChange={onChangePeriod}
    />
  )
}

const mapStateToProps = state => ({stat: state.stat})

export default connect(mapStateToProps)(StatSelect)