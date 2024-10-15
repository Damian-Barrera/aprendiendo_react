import { useContext } from "react"
import { UsuarioContext } from "./Contexto"


const Perfil = () => {

    const user = useContext(UsuarioContext)

    return (
        <div>
            <h2>Hola! Mi nombre es {user.nombre} y tengo {user.edad} </h2>
        </div>
    )
}

export default Perfil
