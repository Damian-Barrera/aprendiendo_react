import { useContext } from 'react'
import { MiContexto } from './MyContext'

const Edad = () => {
    const {edad} = useContext(MiContexto)

  return (
    <div>
      Mi edad es de {edad} años 
    </div>
  )
}

export default Edad
