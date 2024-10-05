import { Link, NavLink } from 'react-router-dom'
 
export const NavBar = () => {
  return (
    <div>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="departamentos" > Departamentos </NavLink>
        <NavLink to = "empresa" > Empresa </NavLink>
        <NavLink to="inicio">Inicio</NavLink>
        <Link to="http://www.google.com" > Google! </Link>
     </div>

  )
}
