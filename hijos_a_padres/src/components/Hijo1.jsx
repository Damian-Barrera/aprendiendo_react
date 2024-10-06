
export const Hijo1 = ({enviandoInformacion }) => {


  const enviarInfo = () => {
    enviandoInformacion('Todo esta ok!' )
  }

  return (
    <>
       <button onClick= { enviarInfo } > Obtener informacion! </button>
    </>
  )
}
