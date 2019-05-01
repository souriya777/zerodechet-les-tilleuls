import React from 'react'

const Options = (props) => (
  <>
    {props.inputs.map(([key, val]) =>
      <option key={key} value={key}>{val}</option>
    )}
  </>
)

export default Options