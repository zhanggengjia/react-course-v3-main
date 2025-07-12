import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    fetchData();
    console.log('first axios request');
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
