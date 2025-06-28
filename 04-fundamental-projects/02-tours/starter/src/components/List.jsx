import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getData } from './dataApi'
import Card from './Card'
import { useState } from 'react'
import Loading from './Loading'

const List = ({ url }) => {

  const [tourList, setTourList] = useState([]);

  const { data: tours, isLoading, isError, refetch, } = useQuery({
    queryKey: [url],
    queryFn: getData
  })

  useEffect(() => {
    if (tours) setTourList(tours)
  }, [tours])

  const handleDelete = (id) => {
    setTourList((prevValue) => (
      prevValue.filter((item) => item.id !== id)
    ))
  }

  const handleRefresh = async () => {
    const result = await refetch();
    if (result.data) setTourList(result.data)
    console.log('refetch data...')
  }

  if (isLoading) return <Loading />
  if (isError) return <p>Something went wrong.</p>


  return (
    <div className='tours'>
      {tourList.map((tour) => (
        <Card key={tour.id} {...tour} handleDelete={handleDelete} />
      ))}
      {!tourList.length && <button className='btn' onClick={handleRefresh}>refresh</button>}

    </div>
  )
}

export default List