import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUser = async () => {
  const { data } = await axios.get('https://api.github.com/users/QuincyLarson');
  return data;
};

const MultipleReturnsFetchData = () => {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['githubUser', 'QuincyLarson'],
    queryFn: fetchUser,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>There was an error...</h2>;

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
