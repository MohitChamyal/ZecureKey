import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button type="button" className="btn btn-success custom-button" onClick = {props.onClick}>
      Generate Password
    </button>
  );
};

export default Button;
