import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons';
import { useState } from 'react'
import '../style.css';
import CartaEjercicios from './CartaEjercicios';


const CartaListaRutina = ({ lista }) => {
    /*FUNCIONES PARA ABRIR/CERRAR EL MODAL DE LOS EJERCICIOS QUE CONTIENE CADA CARTA*/
    const [abierto, setabierto] = useState(false)

    const abrirCerrarModal =()=>{
        setabierto(!abierto)
        console.log(abierto)
    }
    return (
        <div className='cartaRutina' onClick={abrirCerrarModal}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                <h1>{lista.nombreRutina}</h1>
                <div style={{ display: "flex", marginTop: "-15px", gap: "20px" }}>
                    <p>{lista.categoria}</p>
                    <p>{lista.usuario}</p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "13px" }}>
                <IonIcon className='star' icon={star}></IonIcon>
                <p style={{ marginTop: "0", color: "goldenrod" }}>{lista.valoracion}</p>
            </div>
            {<CartaEjercicios isOpen={abierto} cerrarModal={abrirCerrarModal} element={lista} ejercicios={lista.ejercicios}/>}
        </div>
    )
}

export default CartaListaRutina