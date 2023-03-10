import React from 'react'
import "../style.css"
import MANCUERNA from "../../images/mancuerna.png"
import { IonButton } from '@ionic/react'
import { Link } from 'react-router-dom';


const PrincipalHome = () => {
    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                <IonButton className='botonPrincipalHome' routerLink='/buscar' color="dark"><ion-icon slot="start" name="search-outline"></ion-icon>BUSCAR</IonButton>
                <button>RUTINAS</button>
                <button>ESTADISTICAS</button>
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalHome