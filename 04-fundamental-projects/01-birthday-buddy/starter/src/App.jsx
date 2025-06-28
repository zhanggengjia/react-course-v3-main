import { useState } from 'react';
import Card from './components/Card';
import data from './data'
import List from './components/List';
const App = () => {

  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>

  );
};
export default App;
