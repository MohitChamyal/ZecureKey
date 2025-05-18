import React from 'react'
import './Select.css'
import Checkboxes from './Checkboxes'
import Length from './Length'

const Select = (props) => {
  return (
    <div className='contain'>
      <Checkboxes options={props.options} onCheckBoxChange={props.onCheckBoxChange} />
      <Length
        onLengthChange={props.onLengthChange}
        length={props.length}
      />

    </div>
  )
}

export default Select