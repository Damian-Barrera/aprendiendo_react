import { Routes, Route, Navigate } from "react-router-dom"
import Inicio from "../components/Inicio"
import Config from '../components/Config'
import View from "../components/View"
 

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Inicio/>} ></Route>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/config" element={<Config />} ></Route>
        <Route path="/:view" element={<View/>} ></Route>
        <Route path="/*" element={<Navigate to='/' />} ></Route>
      </Routes>
    </>
  )
}

export default Rutas
