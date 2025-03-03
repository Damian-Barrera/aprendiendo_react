import { NavLink } from 'react-router-dom';
import estilos from '../styles/barra_lateral.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";



const BarraLateral = () => {
    return (
        <section className={estilos['barra-lateral']}>
            <NavLink to='/inicio' >
                <i className="bi bi-house-door" title='Inicio'></i>
            </NavLink>

            <NavLink to='/facebook' >
                <i className="bi bi-facebook" title='Facebook'></i>
            </NavLink  >

            <NavLink to='/instagram'>
                <i className="bi bi-instagram" title='Instagram' ></i>
            </NavLink  >

            <NavLink to='/whatsapp'>
                <i className="bi bi-whatsapp" title='whatsapp'></i>
            </NavLink>

            <NavLink to='/telegram'>
                <i className="bi bi-telegram" title='Telegram' ></i>
            </NavLink>
            <NavLink to='/github' >
                <i className="bi bi-github" title='GitHub' ></i>
            </NavLink>
            <NavLink to='/config' >
                <i className="bi bi-gear" title='Config.' ></i>
            </NavLink>
        </section >
    )
}

export default BarraLateral
