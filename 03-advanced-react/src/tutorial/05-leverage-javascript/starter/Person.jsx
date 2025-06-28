import React from 'react'
import avatar from '../../../assets/default-avatar.svg'
const Person = ({ id, name, nickName = "nuknown", images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <h5>NickName : {nickName}</h5>
    </div>
  )
}

export default Person