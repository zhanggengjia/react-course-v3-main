import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState('');

  const login = () => {
    setUser({ name: 'Kevin Chang' });
  }

  const logout = () => {
    setUser('')
  }

  return (
    <div>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button className='btn' onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <div>
            <h4>Please login</h4>
            <button className='btn' onClick={login}>login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
