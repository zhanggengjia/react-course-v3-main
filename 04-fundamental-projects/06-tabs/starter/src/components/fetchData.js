import axios from 'axios';

export const fetchData = async ({ queryKey }) => {
  const [, url] = queryKey;
  const res = await axios.get(url);
  console.log('Raw response:', res);
  const data = res.data;
  return data;
};
