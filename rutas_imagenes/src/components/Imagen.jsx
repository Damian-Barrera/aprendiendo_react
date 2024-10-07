import { NavBar } from "./NavBar"


export const Imagen = ({ imagenUrl, id }) => {

  // const nombre = id.toUpperCase() se reemplazo por estilos de css
 
  return (
    <>
      <h2 className="title-name">  {id } </h2>
      <img src={imagenUrl} alt={id} height='450px' title={id} />
     </>
  )
}

