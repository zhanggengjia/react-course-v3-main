import React from 'react'
import axios from 'axios'

export const getData = async ({ queryKey }) => {
  const url = queryKey[0]
  const { data } = await axios.get(url);
  return data;
}
