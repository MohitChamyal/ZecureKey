import React from 'react'
import Select from './Select'
import './UserInput.css'

const UserInput = (props) => {
  return (
    <div className="user-input">
      <h2>Customize Password</h2>
      <Select
        options={props.options}
        onCheckBoxChange={props.onCheckBoxChange}
        onLengthChange={props.onLengthChange}
        length={props.length}
      />

    </div>
  )
}

export default UserInput
