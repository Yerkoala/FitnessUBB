import { IonIcon } from '@ionic/react'
import React from 'react'

const CartaListaRutina = ({ lista }) => {
    return (
        <div className='cartaRutina'>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center",height:"100%"}}>
                <h1>{lista.nombreRutina}</h1>
                <div style={{display:"flex",marginTop:"-15px",gap:"20px"}}>
                    <p>{lista.categoria}</p>
                    <p>{lista.usuario}</p>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",marginTop:"13px"}}>
                <IonIcon className='star' name='star'></IonIcon>
                <p style={{marginTop:"0",color:"goldenrod"}}>{lista.valoracion}</p>
            </div>
        </div>
    )
}

export default CartaListaRutina