import iconos from '../styles/iconos.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";



const Config = () => {
  return (
    <div className={iconos.wrapper} >
      <p>Pagina de Configuracion</p> 
      <span className={iconos.gear}>
        <i className="bi bi-gear" title='Config.' ></i>
      </span>
    </div>
  )
}

export default Config
