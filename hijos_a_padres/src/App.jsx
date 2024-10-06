import { Hijo1 } from "./components/Hijo1"
import { Hijo2 } from "./components/Hijo2"
import {useState} from 'react'

//Esta practica es acerca de como se envia informacion de los hijos a los padres. Y a otros componentes

function App() {

 const [msg, setMsg] = useState('') 

const enviandoInformacion = (mensaje) => {
  setMsg( mensaje )
}


  return (
    <>
      <Hijo1 enviandoInformacion={enviandoInformacion} />
      <Hijo2 mensaje= {msg} />
    </>
  )
}

export default App
