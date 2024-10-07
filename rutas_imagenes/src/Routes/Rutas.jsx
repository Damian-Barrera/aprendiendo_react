import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { Estephania } from "./components/Estephania"
import { Riae } from "./components/Riae"
import { Emily } from "./components/Emily"
import { Jessica } from "./components/Jessica"

const Rutas = () => {
    return (
        <>
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

export default Rutas
