import React from 'react'

import { AUDIENCE } from '../utils/AudienceHelper'
import { CITY } from '../utils/CityHelper'
import { TOPIC } from '../utils/TopicHelper'
import { all, allId } from '../utils/filter-utils'

import SmartInput from '../common-ui/SmartInput'
import SmartSelect from '../common-ui/SmartSelect'

const RdvFilter = ({ onChangeKeyword, onChangeTopic, onChangeCity, onChangePublic }) => 
  <div className='rdv__filter'>
    <SmartInput 
      type='text'
      name='keyword' 
      placeholder='ex: cosmétique, fabriquer, composteur...' 
      onChange={onChangeKeyword}
    />
    <div className='row'>
      <SmartSelect
        options={all(TOPIC.labelList, false)}
        ids={allId(TOPIC.keyList)}
        placeholder='Thématique'
        onChange={onChangeTopic}
      />
    </div>
    <div className='row'>
      <SmartSelect
        options={all(CITY.labelList, false)}
        ids={allId(CITY.keyList)}
        placeholder='Ville'
        onChange={onChangeCity}
      />
    </div>
    <div className='row'>
      <SmartSelect
        options={all(AUDIENCE.labelList)}
        ids={allId(AUDIENCE.keyList)}
        placeholder='Public'
        onChange={onChangePublic}
      />
    </div>
  </div>

export default RdvFilter