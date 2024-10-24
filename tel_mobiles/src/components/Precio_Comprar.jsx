import React from 'react'
import estilos from '../styles/precio.module.css'


const Precio_Comprar = ({precio}) => {
  return (
    <div className={estilos['precio-comprar']} >
      <div className={estilos.precio}> USD {precio} </div>
      <button className={estilos.btn} >Comprar</button>
    </div>
  )
}

export default Precio_Comprar
