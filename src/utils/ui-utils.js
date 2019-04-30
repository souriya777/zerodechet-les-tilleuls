import React from 'react'

// generate <option> (cf. <select>) from inputs
// inputs format : a 2-dim array, in which each item represent a [key, value]
// eg.
// [
//   ['recyclable', 'Recyclable'], 
//   ['norecyclable', 'Non recyclable']
// ]
// TODO test
export const generateOption = inputs => {
  if (inputs === undefined)
    return

  return inputs.map((entry) => {
    const key = entry[0]
    const val = entry[1]
    
    return <option 
            key={key} 
            value={key} 
          >{val}</option>
  })
}