import React from 'react'
import "./style.css"
import MANCUERNA from "../images/mancuerna.png"

const Principal = () => {
    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                <button><ion-icon slot="start" name="search-outline"></ion-icon>BUSCAR</button>
                <button>RUTINAS</button>
                <button>ESTADISTICAS</button>
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default Principal