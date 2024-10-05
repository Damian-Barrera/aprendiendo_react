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
    <Route path='/*' element={<Navigate to='/' />} ></Route> //Esta es la linea que maneja las rutas que no coinciden con ninguna otra.
  </Routes>

-Y en el menu de navegacion : import {NavLink, Link} from 'react-router-dom
  <NavLink to='lugarDondeLlevara'> Palabra que mostrara </NavLink>
  
  Ejemplo:
   <NavLink to="departamentos" > Departamentos </NavLink>
   <Link to="http://www.google.com" > Google! </Link>