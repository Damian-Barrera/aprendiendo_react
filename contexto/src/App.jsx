import Datos from "./Datos"
import Info from "./Info"
import Edad from "./Edad"
import Ciudad from "./Ciudad"
 







const App = () => {
  return (
    <>
      <h1>Contexto</h1>
      <Datos>
        <Info />
        <Edad />
        <Ciudad />
      </Datos>
 
    

    </>
  )
}

export default App