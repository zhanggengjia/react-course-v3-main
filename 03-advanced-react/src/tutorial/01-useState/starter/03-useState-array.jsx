import { useState } from 'react';
import { data } from '../../../data'
const UseStateArray = () => {

  const [nameList, setNameList] = useState(data)

  function handleClick(id) {
    setNameList(nameList.filter((name) => name.id !== id));
  }

  function handleClear() {
    setNameList([]);
  }

  return (
    <>
      <h2>useState array example</h2>
      {nameList.map((name) => {
        return (
          <div key={name.id}>
            <h2>{name.name}</h2>
            <button onClick={() => handleClick(name.id)} className='btn'>remove</button>
            <hr />
          </div>
        );
      })}
      <button onClick={() => handleClear()} className='btn primary'>Clear All</button>

    </>
  );
};

export default UseStateArray;
