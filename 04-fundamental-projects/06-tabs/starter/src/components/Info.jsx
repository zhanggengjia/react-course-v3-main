import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


const Info = ({ showInfo }) => {

  const { title, company, dates, duties } = showInfo;

  return (
    <div>
      <h3>{title}</h3>
      <p className='job-company'>{company}</p>
      <p className='job-date'>{dates}</p>

      {duties.map((duty, index) => (
        <div key={uuidv4()} className='job-desc'>
          <span className='job-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
          <p>{duty}</p>
        </div>
      ))}
    </div>
  )
}

export default Info