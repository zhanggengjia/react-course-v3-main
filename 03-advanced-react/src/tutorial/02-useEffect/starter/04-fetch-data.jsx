import axios from 'axios';
import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const result = await axios.get(url);
        const users = result.data;
        setUserList(users)
      } catch (e) {
        console.error('cannot get data: ', e)
      }
    }

    getUser();

  }, [])

  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {userList.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        }
        )}
      </ul>
    </section>
  );
};

export default FetchData;
