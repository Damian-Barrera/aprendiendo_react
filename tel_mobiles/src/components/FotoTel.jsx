import React from 'react'
import estilos from '../styles/fotoTel.module.css'

// const urlPhone = 'https://i.blogs.es/fc35f1/huawei-p-smart-2020-00/1366_2000.jpg'


const FotoTel = ( {urlPhone} ) => {

  console.log(urlPhone)

  return (
    <div className={estilos.imgTel}>
      <img src= {urlPhone} alt="telefono" />
    </div>
  )
}

export default FotoTel
