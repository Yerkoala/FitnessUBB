import React, { useEffect, useState } from 'react'
import MANCUERNA from "../../images/mancuerna.png"
import ejercicios from '../../ejercicios'
import TarjetaEjercicio from './TarjetaEjercicio'

const PrincipalEstadisticas = () => {


  return (
    <div className='principalPantallaEstadisticas'>
      <h1>Estadisticas</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",height:"510px",overflowY:"scroll" }}>
        {ejercicios.map((e, index) =>
          <TarjetaEjercicio key={index} nombre={e.nombre} img={e.img} />
        )}
      </div>
      <img className='mancuernaFondo' src={MANCUERNA} alt="" />
    </div>
  )
}

export default PrincipalEstadisticas