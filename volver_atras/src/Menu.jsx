import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <NavLink to='componente1'> Primer Componente </NavLink>
      <NavLink to='componente2'> Componente Dos </NavLink>

    </div>
  )
}

export default Menu
