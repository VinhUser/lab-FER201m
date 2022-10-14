/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import '../css/Header.css'
import { ThemeContext } from './ThemeContext'

export default function Header() {
  const { dark, theme, toggle } = useContext(ThemeContext)
  const background = theme.backgroundColor
  const color = theme.color

  return (<nav>
    <ul id="slide-out" class="sidenav">
      <li><div class="user-view">
        {/* <div class="background">
        <img src="images/office.jpg"></img>
      </div> */}
        <a href="#user"><img class="circle" src="images/yuna.jpg"></img></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div></li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
  </nav>

  )

}
