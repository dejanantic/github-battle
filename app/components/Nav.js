import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'
import { FaMoon, FaLightbulb } from 'react-icons/fa'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={ activeStyle }
                className='nav-link'
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeStyle={ activeStyle }
                className='nav-link'
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            className='btn-clear'
            style={{ fontSize: 35, cursor: "pointer" }}
            onClick={ toggleTheme }
          >
            { theme === 'light' ? <FaMoon /> : <FaLightbulb color="rgba(218, 218, 218, 1)" /> }
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}