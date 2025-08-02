import React from 'react'

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text capitalize mr-2'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default FormInput