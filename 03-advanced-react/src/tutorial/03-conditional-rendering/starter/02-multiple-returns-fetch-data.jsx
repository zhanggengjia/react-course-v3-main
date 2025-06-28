import { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(url);
        const user = result.data;
        setUser(user);
      } catch (e) {
        setIsError(true);
        console.error(e);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
