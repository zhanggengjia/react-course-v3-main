import React, { useState } from 'react'

const TextArea = ({ setShowNum }) => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    setShowNum(parseInt(text));
    setText('');
    e.preventDefault();
  }


  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='showNum' className='label'>Paragraphs: </label>
      <input type='number' id='showNum' name='showNum' className='input' value={text} onChange={handleChange} min='1' max='8' placeholder='1'></input>
      <button type='submit' className='btn' >Generate</button>
    </form>
  )
}

export default TextArea