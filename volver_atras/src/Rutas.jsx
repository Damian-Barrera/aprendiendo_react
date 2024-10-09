import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'



const Rutas = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='componente1' element={<Componente1 />} ></Route>
        <Route path='componente2' element={<Componente2 />} ></Route>
        <Route path='componente3' element={<Componente3 />} ></Route>
        <Route path='/*' element={<Navigate to='/' />} ></Route>
      </Routes>
    </>
  )
}

export default Rutas
