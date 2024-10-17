import { useRef } from "react"

 
function App() {

  const inputRef = useRef()
  
  const enfocar = () => {
    inputRef.current.style.backgroundColor='#cbff';
  }

  return (
    <>
      <h1>UseRef!</h1>
      <input type="text" name="" ref={inputRef} placeholder="Escribir aquí"/>
      <button onClick={enfocar} >Enfocar input</button>
    </>
  )
}

export default App
