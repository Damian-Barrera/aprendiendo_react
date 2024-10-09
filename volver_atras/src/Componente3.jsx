import React from 'react'
import Atras from './Atras'



const Componente3 = () => {
  return (
    <div>
      <h4>Este es el componente nunero 3 ! </h4>
      <Atras />
      <h2>Para poder crear un boton para volver atras:</h2>
      <ul>
        <li>Importar el useNavigate de react-router-dom</li>
        <li>crear una funcion que contenga el useState: <code> const navigate = useNAvigate()</code></li>
        <li>
          Crear una funcion manejadora del onClick cuyo contenido sera la funcion antes creada
          que tendra como parametro -1 . (Esto hace que la pagina regrese atras) <pre><code> const  handleBack = () =&gt; {'{'}
            navigate(-1) {'}'} </code></pre>
        </li>
        <li>Luego llamar a la funcion que puede ser en un button, o icono, o lo que sea, con onClick
          <pre><code>
            {' <button onClick={handleBAck} > <button> '}
          </code></pre>

        </li>
      </ul>


    </div>
  )
}

export default Componente3
