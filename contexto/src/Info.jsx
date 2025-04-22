import { useContext } from "react"
import { MiContexto } from "./MyContext"
import Edad from "./Edad"

 
const Info = () => {

    const {nombre} = useContext(MiContexto)

  return (
    <div>
      Hola mi nombre es {nombre}
      
    </div>
  )
}

export default Info
