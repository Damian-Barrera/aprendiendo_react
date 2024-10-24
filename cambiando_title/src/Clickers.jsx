import React, { useState } from 'react'

export default function Clickers({ count, enviarValorNuevo }) {

  const [newCounter, setNewCounter] = useState(0)
  
  const sumar = () => {
    let valor = newCounter +1
    setNewCounter(valor)
 
    enviarValorNuevo(valor)

  }

  const restar = () => {
    let valor = newCounter -1
    setNewCounter(valor)
 
    enviarValorNuevo(valor)

  }
 
  
  return (
    <div style={{ textAlign: 'center' }} >
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar} >Restar</button>
    </div>
  )
}
