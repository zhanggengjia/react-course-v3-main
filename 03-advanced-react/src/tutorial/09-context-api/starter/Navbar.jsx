import React, { createContext, useState, useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setLogout] = useState({ name: 'Kevin' });

  const logout = () => {
    setLogout({ name: null })
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar