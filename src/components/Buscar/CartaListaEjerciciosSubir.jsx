import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import ejercicios from '../../ejercicios'
import TarjetaEjercicio from './TarjetaEjercicio'


const CartaListaEjerciciosSubir = ({ isOpen, cerrarModal,agregarEjercicio }) => {
    const [buscador, setbuscador] = useState(ejercicios)
    const musculoSelect = [
        "Hombro",
        "Pecho",
        "Pierna",
        "Triceps",
        "Biceps",
        "Espalda",
        "Abdomen"
    ]
    const handleOnChangeSelect = (event) => {
        buscaEjercicioCategoria(event.target.value)
    }
    const buscaEjercicioCategoria = (categoriaBuscada) => {
        const ruti = ejercicios.filter(user => user.categoria.includes(categoriaBuscada))
        setbuscador(ruti)
    }

    const handleOnChange = (e) => {
        buscaEjercicioNombre(e.target.value.toLowerCase())
    }
    const buscaEjercicioNombre = (palabraBuscada) => {
        const ruti = ejercicios.filter(user => user.nombre.toLowerCase().includes(palabraBuscada))
        setbuscador(ruti)
    }

    return (
        <div className={isOpen ? 'cartaSubirRutina' : 'cartaCerradoSubirRutina'}>
            <div className='Modal'>
                <div style={{ display: "flex", gap:"5px",marginBottom:"5px" }}>
                    <select id="categoria" name="categoria" onChange={handleOnChangeSelect}>
                        <option value="">Categoría</option>
                        {musculoSelect.map((e, index) =>
                            <option key={index} value={e}>{e}</option>
                        )}
                    </select>
                    <input type="text" onChange={handleOnChange}/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "520px", overflowY: "scroll" }}>
                    {buscador.map((e, index) =>
                        <TarjetaEjercicio key={index} nombre={e.nombre} img={e.img} agregarEjercicio={agregarEjercicio}/>
                    )}
                </div>
            </div>
            <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
        </div>
    )
}

export default CartaListaEjerciciosSubir