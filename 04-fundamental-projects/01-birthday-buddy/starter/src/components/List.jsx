import React from 'react'
import Card from './Card'

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <Card {...person} key={person.id} />
      ))}
    </div>
  )
}

export default List