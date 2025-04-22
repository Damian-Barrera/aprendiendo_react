import { useContext } from 'react'
import { MiContexto } from './MyContext'

const Ciudad = () => {

    const {ciudad} = useContext(MiContexto)
  return (
    <div>
      Vivo en {ciudad}
    </div>
  )
}

export default Ciudad
