import { IonIcon } from '@ionic/react'
import { useState } from 'react'
import '../style.css';
import CartaEjercicios from './CartaEjercicios';

const CartaListaRutina = ({ lista }) => {
    const [abierto, setAbierto] = useState(false)

    const abrirModal = () => {
        setAbierto(true)
    }
    const cerrarModal = () => {
        setAbierto(false)
    }

    return (
        <div className='cartaRutina' onClick={abrirModal}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                <h1>{lista.nombreRutina}</h1>
                <div style={{ display: "flex", marginTop: "-15px", gap: "20px" }}>
                    <p>{lista.categoria}</p>
                    <p>{lista.usuario}</p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "13px" }}>
                <IonIcon className='star' name='star'></IonIcon>
                <p style={{ marginTop: "0", color: "goldenrod" }}>{lista.valoracion}</p>
            </div>
            <CartaEjercicios isOpen={abierto} cerrarModal={cerrarModal} element={lista}/>
        </div>
    )
}

export default CartaListaRutina