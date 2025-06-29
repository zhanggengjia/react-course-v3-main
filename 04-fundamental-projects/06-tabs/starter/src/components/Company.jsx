import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Company = ({ jobData, handleInfo, showInfo }) => {

  return (
    <div className="btn-container">
      {jobData.map((job, index) => (
        <button key={uuidv4()} className={`job-btn ${(showInfo.id === job.id) && 'active-btn'}`} onClick={() => handleInfo(job.id)}>{job.company}</button>
      ))}
    </div>
  )
}

export default Company