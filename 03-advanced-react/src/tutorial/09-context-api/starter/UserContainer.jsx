import { useAppContext } from "./Navbar"

const UserContainer = () => {
  const { user, logout } = useAppContext();
  return (
    <div className='user-container'>
      {user.name ? (
        <>
          <h5>Hello There, {user.name}</h5>
          <button className='btn' onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login</p>
        </>)}
    </div>
  )
}

export default UserContainer