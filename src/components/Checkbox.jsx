import React from 'react';
import './Checkbox.css';

const Checkbox = ({ label, name, checked, onCheckBoxChange }) => {
  return (
    <label className="checkbox-option">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onCheckBoxChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
