import React from 'react'

const Options = (props) => (
  <>
    {props.items.map(([key, val]) =>
      <option key={key} value={key}>{val}</option>
    )}
  </>
)

export default Options