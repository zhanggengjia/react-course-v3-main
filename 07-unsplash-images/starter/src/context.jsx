import { createContext, useContext, useState, useEffect, Children } from "react";

const AppContext = createContext();

// const getInitialDarkMode = () => {
//   const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark').matches;
//   const storeDarkMode = localStorage.getItem('darkTheme');

//   if (storeDarkMode) {
//     if (storeDarkMode === 'true') {
//       return true;
//     } else {
//       return false
//     }
//   } else if (prefersDarkMode === true) {
//     return true;
//   } else {
//     return false;
//   }
// };

const getInitialDarkMode = () => {
  const raw = localStorage.getItem('darkTheme');
  if (raw === 'true') return true;
  if (raw === 'false') return false;

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkMode;
};


export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => { return useContext(AppContext) }