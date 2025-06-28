import React, { useState } from 'react'

const Card = ({ image, name, info, price, id, handleDelete }) => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className='single-tour'>
      <div className='tour-price'>
        $ {price}
      </div>
      <img src={image} alt={name} className='img' />
      <div className='tour-info'>
        <h5>{name}</h5>

        {showMore ? (
          <p>{info}<button className='info-btn' onClick={() => setShowMore(!showMore)}>Show Less</button></p>
        ) : (
          <p>{info.slice(0, 200) + '... '}<button className='info-btn' onClick={() => setShowMore(!showMore)}>Read More</button></p>
        )}

        <button className="delete-btn btn-block" onClick={() => handleDelete(id)}>Not Interested</button>
      </div>

    </div>
  )
}

export default Card