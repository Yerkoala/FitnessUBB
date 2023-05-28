import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons';
import { useState, useEffect } from 'react'
import '../style.css';
import CartaEjercicios from './CartaEjercicios';


const CartaListaRutina = ({ lista,logueado }) => {
    /*FUNCIONES PARA ABRIR/CERRAR EL MODAL DE LOS EJERCICIOS QUE CONTIENE CADA CARTA*/
    const [abierto, setabierto] = useState(false)
    const abrirCerrarModal = () => {
        setabierto(!abierto)
        console.log(abierto)
    }

    const [calificacion, setcalificacion] = useState(0)
    const calculaValoracion = (valores) => {
        const suma = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        setcalificacion((suma / valores.length).toFixed(1))
    }

    useEffect(() => {
        calculaValoracion(lista.valoracion)
    }, [])

    return (
        <div className='cartaRutina' onClick={abrirCerrarModal}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                <h2 style={{fontWeight:"bold"}}>{lista.nombreRutina}</h2>
                <div style={{ display: "flex", marginTop: "-15px", gap: "20px" }}>
                    <p>{lista.categoria}</p>
                    <p>{lista.usuario}</p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "13px" }}>
                <IonIcon className='star' icon={star}></IonIcon>
                <p style={{ marginTop: "0", color: "goldenrod" }}>{calificacion}</p>
            </div>
            {<CartaEjercicios isOpen={abierto} cerrarModal={abrirCerrarModal} element={lista} ejerciciosArreglo={lista.ejercicios} logueado={logueado} />}
        </div>
    )
}

export default CartaListaRutina