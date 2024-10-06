import { NavBar } from "./NavBar"


export const Imagen = ({ imagenUrl, id }) => {

  const nombre = id.toUpperCase()
  console.log(id)

  return (
    <>
      <h2>  {nombre } </h2>
      <img src={imagenUrl} alt={nombre} height='450px' title={id} />
     </>
  )
}

