import { useFetchTasks } from './reactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = () => {
  const { isLoading, isError, data } = useFetchTasks();

  if (isLoading) {
    return <p>is loading</p>
  }

  if (isError) {
    return <p>There is an error</p>
  }

  // if (error) {
  //   return <p>{error.response.data}</p>
  // }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
