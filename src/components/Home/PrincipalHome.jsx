import React from 'react'
import "../style.css"
import MANCUERNA from "../../images/mancuerna.png"
import CartaRutinaPropias from './CartaRutinaPropias'



const PrincipalHome = () => {
    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                <CartaRutinaPropias titulo="Full Body"/>
                <CartaRutinaPropias titulo="Push/Empuje"/>
                <CartaRutinaPropias titulo="Pull/Jalón"/>
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalHome