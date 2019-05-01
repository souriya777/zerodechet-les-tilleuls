import React from 'react'
import { shallow } from 'enzyme'

import Options from './Options'

describe('<Options>', () => {
  it(`
    generate :
      <option key='recyclable' value='recyclable'>Recyclable</option>
      <option key='norecyclable' value='norecyclable'>Non recyclable</option>
    from :
      [
        ['recyclable', 'Recyclable'], 
        ['norecyclable', 'Non recyclable']
      ]
  `, () => {
    const keyValList = [
      ['recyclable', 'Recyclable'], 
      ['norecyclable', 'Non recyclable']
    ]
  
    const wrapper = shallow(<Options inputs={keyValList} />)
  
    expect(wrapper.find('option')).toHaveLength(2)

    expect(wrapper.contains(<option key='recyclable' value='recyclable'>Recyclable</option>)).toBeTruthy()

    expect(wrapper.contains(<option key='norecyclable' value='norecyclable'>Non recyclable</option>)).toBeTruthy()
 
  })
})
