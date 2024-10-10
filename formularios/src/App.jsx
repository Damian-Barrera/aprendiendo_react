import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [ciudad, setCiudad] = useState('')

  const enviando = (e) => {
    e.preventDefault()
    console.log('Informacion enviada')
    setName('')
    setCiudad('')
  }
  return (
    <>
      <h1>Formularios</h1>
      <form onSubmit={enviando}>

        <input type="text" name="nombre" id="" placeholder='Nombre' value={name} onChange={e => setName(e.target.value)} />

      
        <input type="text" name="ciudad" id="" placeholder='Ciudad ' value={ciudad} onChange={e => setCiudad(e.target.value)} />
 
        <input type="submit" value="Enviar" />
        
      </form>

      <div className="datos">
        <p>EL nombre es : {name} </p>
        <p>Y la ciudad es : {ciudad} </p>
      </div>    </>
  )
}

export default App
