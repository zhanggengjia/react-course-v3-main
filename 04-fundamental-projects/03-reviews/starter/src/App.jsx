import { useRef, useState } from 'react';
import data from './data'
import Review from './components/Review';
import { FcNext, FcPrevious } from "react-icons/fc";


const App = () => {
  const people = data;
  const showId = useRef(0)
  const [person, setPerson] = useState(people[showId.current]);

  const handleClick = (act) => {
    const total = people.length;
    if (act === 'prev') {
      showId.current = (showId.current - 1 + total) % total;
    } else if (act === 'next') {
      showId.current = (showId.current + 1) % total;
    }
    setPerson(people[showId.current])
  }

  const handleRandom = () => {
    if (people.length <= 1) return;

    let randomNum;

    do {
      randomNum = Math.floor(Math.random() * people.length);
    } while (randomNum === showId.current);

    showId.current = randomNum;
    console.log(randomNum);
    setPerson(people[showId.current]);
  }


  return (
    <main>
      <div className='review'>
        <Review {...person} />
        <div className='btn-container'>
          <button className='prev-btn' onClick={() => handleClick('prev')}><FcPrevious /></button>
          <button className='next-btn' onClick={() => handleClick('next')}><FcNext /></button>
        </div>
        <button className='btn btn-hipster' onClick={handleRandom}>Random</button>
      </div>
    </main>
  );
};
export default App;
