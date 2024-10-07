import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Estephania } from '../components/Estephania'
import { Emily } from '../components/Emily'
import { Beppler } from '../components/Beppler'
import { Riae } from '../components/Riae'
import { Genesis } from '../components/Genesis'
import Jessica from '../components/Jessica'
import Marie from '../components/Marie'
import Laura from '../components/Laura'


const Rutas = () => {
    return (
        <>
            <Routes >
                <Route path="/" element="" ></Route>
                <Route path='estephania' element={<Estephania />}> </Route>
                <Route path='emily' element={<Emily />}> </Route>
                <Route path='beppler' element={<Beppler />} ></Route>
                <Route path='riae' element={<Riae />} ></Route>
                <Route path='genesis' element={<Genesis />}></Route>
                <Route path='jessica' element={<Jessica />}></Route>
                <Route path='marie' element= {<Marie />} > </Route>
                <Route path='laura' element= {<Laura />} > </Route>
              </Routes>
        </>
    )
}

export default Rutas
