import React, { useState } from 'react'

const TextArea = ({ setShowNum }) => {

  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const showNum = formData.get('showNum');
    setShowNum(parseInt(showNum));
    setValue(value + 1);
    e.currentTarget.reset();
  }

  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='showNum' className='label'>Paragraphs: </label>
      <input type='number' id='showNum' name='showNum' className='input' min='1' max='8' placeholder='1'></input>
      <button type='submit' className='btn' >Generate</button>
    </form>
  )
}

export default TextArea