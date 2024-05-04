import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        Welcome
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/project'>Projects</NavLink>
      <NavLink to='/materials'>Materials</NavLink>
      <NavLink to='/employee'>Employee</NavLink>
    </div>
  )
}
