import React from 'react'
import "../style.css"

const TarjetaEjercicio = ({nombre,img}) => {
  return (
    <div className='TarjetaEjercicioCuerpo'>
        <img src={img} alt="Imagen del ejercicio" />
        <p>{nombre}</p>
    </div>
  )
}

export default TarjetaEjercicio