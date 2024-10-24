import React from 'react'
import estilos from '../styles/descripcion.module.css'


const Descripcion = ({marca, modelo, descripcion}) => {
   return (
    <div className={estilos.descripcion}>
      <h2 className={estilos.subtitle} >{marca} {modelo} </h2>
      <p> {descripcion} </p>
    </div>
  )
}

export default Descripcion
