import { Routes, Route, Navigate } from 'react-router-dom'
import { Departamentos } from "./components/Departamentos"
import { Inicio } from "./components/Inicio"
import { Empresa } from './components/Empresa'
import { NavBar } from "./components/NavBar"


function App() {


  return (
    <>
      <h1>Manejo de Rutas en React !</h1>
      <h2>Esta es la pagina principal ! ;)</h2>
      <NavBar />
      <Routes>
        <Route path='/' element='' ></Route>
        <Route path='departamentos' element={<Departamentos />} > </Route>
        <Route path='empresa' element={<Empresa />} ></Route>
        <Route path='inicio' element={<Inicio />}></Route>
        <Route path='/*' element={<Navigate to='/' />} ></Route>
      </Routes>
    </>
  )
}

export default App
