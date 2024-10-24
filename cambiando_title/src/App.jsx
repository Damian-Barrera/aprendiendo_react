import { useEffect, useState } from "react"
import Clickers from "./Clickers"


function App() {

  const [contador, setContador] = useState(0)

  const enviarValorNuevo = (valor) => {
    setContador(valor)
  }

  useEffect(() => {
    document.title = `El conteo es de ${contador} !! `
  }, [contador])

  return (
    <>
      <h1>Cambiando Title</h1>
      <h2 style={{ textAlign: 'center', color: 'red', fontSize: '40px' }} > {contador} </h2>
      <Clickers count={contador} enviarValorNuevo={enviarValorNuevo} />
    </>
  )
}

export default App
