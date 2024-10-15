-Para crear un proyeto se hace con npm create vite . Ir siguiendo las opciones.
-Luego de eso , entrar a la carpeta que se crea y alli instalar: npm install o npm i.
-Para correr la aplicacion, npm run dev .
-npm run build : Para empaquetar el proyecto y dejarlo listo para produccion.

## PROPS

-Para usar una props se puede hacer destructurando o anteponiendo la palabra props

export const NombreComponente = ( props ) => { //Aqui se abtepone la palabra props
return (

<div> props.nombreProps </div>
)
}

export const NombreComponente = ( {NombreProps}) => { //Aqui se desestructura la props
return (

<div> {nombreProps} </div>
)
}

-Recordar que cada vez que se use un map debe llevar una key, que es como un id que si no esta presente tira error

## useEffect

useEffect( () => {
Codigo que se ejecutara.
}, Lista de dependencias )

-Si en las "Listas de dependencias " No hay nada. El codigo se ejecutara todas las veces que el componente al que pertenece el hook se renderize
-Si se coloca un array vacio, [], El codigo se ejecutara solo una vez que sera cuando se renderiza el componente por primera vez .
-Si se coloca en el array un valor, el codigo se ejecutara cada vez que en ese "valor" (o mas valores) se produzacan un cambios.

### Rutas

-Instalar e importar el react-router-dom

- En la aplicacion principal importar el browserRouter
  import { BrowserRouter } from 'react-router-dom'

    <BrowserRouter >
     <StrictMode>
         <App />
     </StrictMode>
   </BrowserRouter>,

  -Luego crear las rutas. Para ello debo: import {Routes, Route,Navigate} from 'react-router-dom
  -El navigate se usara para que la aplicacion, en caso de que se ingrese una ruta incorrecta me redirija a donde se le indique.

     <Routes>
         <Route path='palabra_que_referenciara' element= { <NombreComponente/> } > </Route>  
         <Route path='/*' element={ <Navigate to='/' /> } ></Route> En este caso se redirije al la raiz.
     </Routes>

  Ejemplo :
  <Routes>
  <Route path='/' element='' ></Route>
  <Route path='departamentos' element={<Departamentos />} > </Route>
  <Route path='empresa' element={<Empresa />} ></Route>
  <Route path='inicio' element={<Inicio />}></Route>
  <Route path='/\*' element={<Navigate to='/' />} ></Route> //Esta es la linea que maneja las rutas que no coinciden con ninguna otra.
  </Routes>

-Y en el menu de navegacion : import {NavLink, Link} from 'react-router-dom
<NavLink to='lugarDondeLlevara'> Palabra que mostrara </NavLink>

Ejemplo:
<NavLink to="departamentos" > Departamentos </NavLink>

   <Link to="http://www.google.com" > Google! </Link>

-Todas las rutas deben ser declaradas en Routes. Y este a la vez puede ser un componente aparte, para asi poder tener un mejor control y organizacion de las rutas.

## Boton de volver atras

-Importar el useNavigate de react-router-dom
-crear una funcion que contenga el useState: const navigate = useNAvigate()
-Crear una funcion manejadora del onClick cuyo contenido sera la funcion antes creada que tendra como parametro -1 . (Esto hace que la pagina regrese atras). (Estas dos funciones colocarlas dentro de la funcion del componente antes del return . )
const handleBack = () => {navigate(-1) }
-Luego llamar a la funcion que puede ser en un button, o icono, o lo que sea, con onClick
<button onClick={handleBAck} > <button>


## useContext
-Este hook sirve para pasar datos entre varios componentes sin tener que pasar props de uno en uno. 

-Puedo crear un componente aparte para crear la funcion que va a iniciar el contexto. Este componente puede ser un simple archivo js. 
  import { createContext } from 'react'children_props
  const NombreFuncion = createContext(); Este nombre de funcion se recomienda iniciar con  mayuscula. 

-En el app.jsx o en el archivo padre donde engloba a los distintos componentes que usaran el contexto, se debe llamar a la funcion antes creada y asignarle el provider y el valor que usaran los hijos. Todos los componentes que esten dentro del Provider son los que podran tener acceso a los datos que se envien.


   import {NombreFuncion} from 'ruta_donde_esté'

   <NombreFuncion.Provider value=  {valor_que_se_le_pasara}> 

   Ejemplo:

                  function App() {
                  const user = {nombre:'Damian', edad: 37}
                    
                    return (
                      <>
                        <h1>UseContext</h1>
                        <UsuarioContext.Provider  value= {user}>
                          <Perfil />
                        </UsuarioContext.Provider>
                      </>
                    )
                  }

- Ya dentro del componente que usara el contexto se importara el useContext y a funcion que tiene el contexto.
  import {useContext} from 'react'
  import {NombreFuncion} from 'ruta.js'

- Y se llama al contexto : 
  const variable = useContext( NombreFuncion )

-Dentro del return hago uso de esa variable:
  return (
    Hola, yo soy el contexto: {variable} En caso de que sea un objeto : variable.dato1
  )  


  

## Formularios

-En formularios, en los input se debe reemplazar el for por htmlFor y en vez de id lleva name .

-Es util usar un useState cuyos parametros sean los name de los input.
[name,setName] = useState(''),
[tel,setTel] = useState(''),

-El form debe tener una escucha onSubmit y ejecutar la funcion correspondiente a ese evento. Se debe crear la funcion que maneje ese evento.

  <Form onSubmit={handleSubmit}>

- En los input en el value se le puede pasar como valor el estado para que se actualize en tiempo real.
  <input value={tel}>
  -Tambien deben tener el evento onChange para escuchar a medida que se van ingrersando datos y pueda ir actualizando su value.
  <input onChange={e => setTel(e.target.value)}>
   <form onSubmit={enviando}>
Ejemplo:

  const [name, setName] = useState('')

  const [ciudad, setCiudad] = useState('')

const enviando = (e) => {
e.preventDefault()
console.log('Informacion enviada')
setName('')
setCiudad('')
}
return (
 <form onSubmit={enviando}>
        <input type="text" name="nombre" value={name} onChange={e => setName(e.target.value)} />    
        <input type="text" name="ciudad"  value={ciudad} onChange={e => setCiudad(e.target.value)} />
        <input type="submit" value="Enviar" />
  </form>
)