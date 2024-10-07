
import { NavBar } from './components/NavBar'
import { Imagen } from './components/Imagen'
import { useState, useEffect } from 'react'


//hacer algo para que en el titulo de html pueda modificar con informacion del useState. 


function App() {

  const [urlImg, setUrlImg] = useState('')
  const [id, setID] = useState('')



  const setUrl = (url, id) => {

    setUrlImg(url)
    setID(id)
  }

  useEffect(()=> {
    document.title = id
  },[id])

  return (
    <>
      <h1>Practicando Rutas con Imagenes!</h1>
      <h3> Ver Fotos:</h3>
      <div className="container">
        <NavBar setUrl={setUrl} />
        <div className="pics">
          <Imagen imagenUrl={urlImg} id={id} />
        </div>
      </div>

    </>
  )
}

export default App
