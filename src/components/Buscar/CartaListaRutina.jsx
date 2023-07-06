import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons';
import { useState, useEffect } from 'react'
import CartaEjercicios from './CartaEjercicios';
import './CartaListaRutina.css';


const CartaListaRutina = ({ lista, logueado }) => {
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
        <div className='cartaRutinaCuerpo' onClick={abrirCerrarModal}>
            <div className='cartaRutinaTextos'>
                <div className='cartaRutinaTitulo'>
                    <h3>{lista.nombreRutina}</h3>
                </div>
                <div className='cartaRutinaCategoriaUsuario'>
                    <p style={{fontWeight:"bold",color:"GrayText"}}>{lista.categoria}</p>
                    <p>{lista.usuario}</p>
                </div>
            </div>
            <div className='cartaRutinaValoracion'>
                <IonIcon className='star' icon={star}></IonIcon>
                <p>{calificacion}</p>
                <p style={{fontSize:"14px"}}>{lista.valoracion.length}</p>
            </div>
            {<CartaEjercicios isOpen={abierto} cerrarModal={abrirCerrarModal} element={lista} ejerciciosArreglo={lista.ejercicios} logueado={logueado} />}
        </div>
    )
}

export default CartaListaRutina