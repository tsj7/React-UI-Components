import React from 'react';
import './Button.css';

const ButtonContainer = () => {
  return (
    <div className={`button-container ${props.className}`}>
        {props.children}
    </div>
  );
};

export default ButtonContainer;
