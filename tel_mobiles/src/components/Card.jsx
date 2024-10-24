import React, { useEffect, useState } from 'react'
import estilos from '../styles/card.module.css'
import main from '../styles/mainContainer.module.css'
import FotoTel from './FotoTel'
import Descripcion from './Descripcion'
import Caracteristicas from './Caracteristicas'
import Precio_Comprar from './Precio_Comprar'

 

const Card = () => {
  const [datosTel, setDatosTel] = useState([])
  const URL_JSON = '/public/phones.json'

  useEffect(() => {
    fetch(URL_JSON)
      .then(response => response.json())
      .then(datos => {
        setDatosTel(datos)
      })
  }, [])


  return (
    <div className={main['main-container']}>
       { datosTel.map((dato) => (
         
         <div key={dato.id} className={estilos['card-contanier']}>
         <FotoTel urlPhone={dato.url} />
         <Descripcion marca={dato.marca} modelo={dato.modelo} descripcion={dato.descripcion} />
         <Caracteristicas camara={dato.camara_px} so={dato.sistema_operativo} bateria={dato.bateria_mAh} />
         <Precio_Comprar precio={dato.precio} />
            
      </div>
       ))}

    </div>
  )
}

export default Card
