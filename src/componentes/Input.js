import React from 'react';


const Input = ({ attribute, handleChange, param }) => {
    return (
      <div className='input-container'>
        <input
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={ (e) => handleChange(e.target.name, e.target.value)}
        className='regular-style'
        />

      </div>
    )
  
};
export default Input;