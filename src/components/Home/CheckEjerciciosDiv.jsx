import "../style.css"
import { useState } from 'react'
import CronometroPantalla from './CronometroPantalla'

const CheckEjerciciosDiv = ({ ejercicionombre }) => {
  const [abierto, setAbierto] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const abrirCerrar = () => {
    setAbierto(!abierto)
  }

  const marcarCheck = () => {
    setIsChecked(true)
  }

  return (
    <div className='CheckEjerciciosDiv' onClick={abrirCerrar}>
      <input type="checkbox" checked={isChecked} readOnly />
      <p>{ejercicionombre}</p>
      <CronometroPantalla isOpen={abierto} abrirCerrar={abrirCerrar} marcarCheck={marcarCheck} ejercicionombre={ejercicionombre} />
    </div>
  )
}

export default CheckEjerciciosDiv