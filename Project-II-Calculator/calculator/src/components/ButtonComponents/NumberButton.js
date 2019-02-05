import React from 'react';
import './Button.css';

const NumberButton = () => {
  return (
    <button className={`number-button ${props.bgColor}`}>{props.text}</button>
  );
};

export default NumberButton;
