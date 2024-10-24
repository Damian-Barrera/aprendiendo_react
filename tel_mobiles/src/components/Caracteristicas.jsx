import React from 'react'
import estilos from '../styles/caracteristicas.module.css'

const Caracteristicas = ({camara,so,bateria}) => {
  return (
    <div className={estilos.caracteristicas} >
      <ul>
        <li> <i className="fa-solid fa-camera"></i> {camara} </li>
        <li> <i className="fa-brands fa-android"></i> {so} </li>
        <li> <i className="fa-solid fa-bolt"></i> {bateria}</li>
      </ul>
    </div>
  )
}

export default Caracteristicas
