import React from 'react'
import "../style.css"

const TarjetaEjercicio = ({nombre,img,agregarEjercicio}) => {
  return (
    <div className='TarjetaEjercicioCuerpo' onClick={()=>agregarEjercicio(nombre)}>
        <img src={img} alt="Imagen del ejercicio" />
        <p>{nombre}</p>
    </div>
  )
}

export default TarjetaEjercicio