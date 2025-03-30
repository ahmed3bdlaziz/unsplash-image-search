import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { UseAppContext } from '../context'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = UseAppContext()
  return (
    <div>
      <div className="toggle-container">
        <button className="dark-toggle" onClick={toggleDarkTheme}>
          {isDarkTheme ? (
            <BsSunFill className="toggle-icon" />
          ) : (
            <BsMoonFill className="toggle-icon" />
          )}
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
