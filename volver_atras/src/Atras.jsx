import React from 'react'
import { useNavigate } from 'react-router-dom'

const Atras = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={handleBack}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
        </div>
    )
}

export default Atras
