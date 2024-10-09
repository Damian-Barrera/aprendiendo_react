import React from 'react'
import { NavLink } from 'react-router-dom'

const Volver = () => {
    return (
        <div>
            <NavLink to='/' >
                <i className="fa-solid fa-house-user"> Volver</i>
            </NavLink>
        </div>
    )
}

export default Volver
