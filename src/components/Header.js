/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import '../css/Header.css'
import { ThemeContext } from './ThemeContext'

export default function Header() {
  const {dark, theme, toggle} = useContext(ThemeContext)
  const background = theme.backgroundColor
  const color = theme.color
  
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo"><i class="material-icons">home</i> Home</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">New</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <a href='#' className='switch' onClick={toggle} style={{backgroundColor: background, color: color}} >
            Switch into {!dark ? 'Dark' : 'Light'} mode
          </a>
        </li>
      </ul>
    </div>
  </nav>
  
  )
      
}
