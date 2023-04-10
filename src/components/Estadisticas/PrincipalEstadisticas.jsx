import React, { useEffect, useState } from 'react'
import MANCUERNA from "../../images/mancuerna.png"



const PrincipalEstadisticas = () => {


  return (
    <div className='principalPantallaEstadisticas'>
      <h1>Estadisticas</h1>
      
      <img className='mancuernaFondo' src={MANCUERNA} alt="" />
    </div>
  )
}

export default PrincipalEstadisticas