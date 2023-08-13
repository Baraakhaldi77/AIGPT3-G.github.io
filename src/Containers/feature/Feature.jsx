import React from 'react';
import "./Feature.css";

const Feature = ({ title, text, titleStyle }) => {
  return (
    <div className='feature-container'>
      <div className='feature-container-title'>
        <h1 style={titleStyle}>{title}</h1>
      </div>
      <div className='feature-text'>
        {text}
      </div>
    </div>
  );
}

export default Feature;
