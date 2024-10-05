import { useState } from "react"
export const Contador = () => {

  const [contador, setContador] = useState(0)

  const agregar = () => {

    setContador(contador + 1)

  }

  const reset = () => {
    setContador( 0 )
  }

  return (
    <div className="wrap">
      <div className="div-container">
        <button className="reset" onClick={reset}>Reset</button>
        <h2 className="contador"> {contador} </h2>
        <button className="add" onClick={agregar}>Sumar</button>
      </div>
    </div>
  )
}

 