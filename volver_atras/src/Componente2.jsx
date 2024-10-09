import React from 'react'
import Volver from './Volver'
import { NavLink } from 'react-router-dom'


const Componente2 = () => {
  return (
    <div>
      <Volver />
      <h3>Este es el contenido del componete 2</h3>
      <NavLink to='/componente3'> Componente tres </NavLink>
      </div>
  )
}

export default Componente2
