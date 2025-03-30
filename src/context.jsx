import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  return storedDarkMode || prefersDarkMode
}

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode)
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkMode = !isDarkTheme
    setIsDarkTheme(newDarkMode)
    localStorage.setItem('darkTheme', newDarkMode)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

const UseAppContext = () => useContext(AppContext)
export { UseAppContext, AppProvider }
