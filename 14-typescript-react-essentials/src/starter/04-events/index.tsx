import { useState } from 'react';

type Person = {
  name: string;
  email: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    const text = formData.get('text') as string;
    const email = formData.get('email') as string;
    const person: Person = { name: text, email: email };
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
}
export default Component;
