/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import '../css/Header.css'
import { ThemeContext } from './ThemeContext'

export default function Header() {
  const {dark, theme, toggle} = useContext(ThemeContext)
  const background = theme.backgroundColor
  const color = theme.color
  return (
    <div className='header'>
        <ul className='ul' style={{backgroundColor: background}} >
          <li><a className='active nav-a' style={{color: color}} href='#home'>Home</a></li>
          <li><a className='nav-a' style={{color: color}} href='#news'>News</a></li>
          <li><a className='nav-a' style={{color: color}} href='#about'>About</a></li>
          <li><a className='nav-a' style={{color: color}} href='#contact'>Contact</a></li>
          <a href='#' className='switch' onClick={toggle} style={{backgroundColor: background, color: color}} >
            Switch into {!dark ? 'Dark' : 'Light'} mode
          </a>
        </ul>
    </div>
  )
}
