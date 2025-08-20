import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 3,
    url: 'some url',
    // text: 'some text',
  },
];

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [links, setLinks] = useState(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText('hello');
          setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
