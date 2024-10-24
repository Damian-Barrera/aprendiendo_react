import { UsuarioContext } from "./Contexto"
import Perfil from "./Perfil"


function App() {
const user = {nombre:'Damian', edad: 37}
  
  return (
    <>
      <h1>UseContext</h1>
      <UsuarioContext.Provider   value= {user}> 
        <Perfil />
      </UsuarioContext.Provider>
     </>
  )
}

export default App
