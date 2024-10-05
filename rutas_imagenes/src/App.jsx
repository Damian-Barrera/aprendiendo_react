import { Routes, Route, Navigate } from 'react-router-dom'
import { Estephania } from "./components/Estephania"
import { Riae } from "./components/Riae"
import { Emily } from "./components/Emily"
import { Jessica } from "./components/Jessica"
import { NavBar } from './components/NavBar'
import { Imagen } from './components/Imagen'
import { useState } from 'react'





function App() {

  const [imagenUrl, setImagenUrl] = useState('')

  return (
    <>
      <h1>Practicando Rutas con Imagenes!</h1>
      <h3> Ver Fotos:</h3>
      <div className="container">
        <NavBar setImagenUrl= {setImagenUrl} />
        <div className="pics">
          <Imagen imagenUrl={imagenUrl} />
        </div>
      </div>
      <Routes >
        <Route path="/" element="" ></Route>
        <Route path="estephania" element={<Estephania />} ></Route>
        <Route path="emily" element={<Emily />} ></Route>
        <Route path="riae" element={<Riae />} ></Route>
        <Route path="jessica" element={<Jessica />} ></Route>
        <Route path='/*' element={<Navigate to="/" />} ></Route>
      </Routes>
    </>
  )
}

export default App
