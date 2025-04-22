import { useState } from "react"
import { client } from "../../supacConfig/cient"

const Login = () => {

    const [email,setEmail] = useState('')


    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(email)
        console.log(client)


     }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login
