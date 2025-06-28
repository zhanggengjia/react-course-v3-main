import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from '../04-react-18/slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), [])

  // const removePerson = useCallback((id) => {
  //   const newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople)
  // }, [people]);

  const removePerson = useCallback((id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  }, []);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
