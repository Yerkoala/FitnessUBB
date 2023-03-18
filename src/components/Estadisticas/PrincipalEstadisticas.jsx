import React from 'react'
import fenusin from "../../images/fenusin.png"
import MANCUERNA from "../../images/mancuerna.png"

const PrincipalEstadisticas = () => {
  return (
    <div className='principalPantallaEstadisticas'>
      <h1>Estadisticas</h1>
      <h1>WENA FEÑUSIN!</h1>
      <img src={fenusin} alt="" />
      <img className='mancuernaFondo' src={MANCUERNA} alt="" />
    </div>
  )
}

export default PrincipalEstadisticas