import { useRef, useState } from 'react';
import { data } from '../../../data'

const UserChallenge = () => {
  const [peopleList, setPeopleList] = useState(data)
  const [name, setName] = useState('')

  const idRef = useRef(data.length + 1);

  const handleSubmit = (e) => {
    setPeopleList((prevValue) => [...prevValue, { id: idRef.current, name }])
    idRef.current += 1;
    setName('')

    e.preventDefault();
  }

  const handleDelete = (id) => {
    setPeopleList(peopleList.filter(person => person.id != id))
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <p>{name}</p>
      {peopleList.map(({ id, name }) => (
        <div key={id}>
          <h4 className='d-inline-block m-3'>{id}</h4>
          <h4 className='d-inline-block m-3'>{name}</h4>
          <button className='btn d-inline-block' onClick={() => handleDelete(id)}>delete</button>
        </div>
      ))}

    </div>
  );
};
export default UserChallenge;
