import { IonButton } from '@ionic/react'
import { useState } from 'react'
import MANCUERNA from "../../images/mancuerna.png"
import CartaListaRutina from './CartaListaRutina'

const PrincipalBuscar = () => {

    const [buscador, setbuscador] = useState([
        {
            nombreRutina: "Super rutina de pecho",
            categoria: "Pecho",
            usuario: "Yerkoala",
            valoracion: 4.5,
            ejercicios:[
                "Hola",
                "Que tal",
                "Hello"
            ]
        },
        {
            nombreRutina: "Piernas para morir",
            categoria: "Pierna",
            usuario: "Feñusin",
            valoracion: 2.1
        },
        {
            nombreRutina: "Master triceps",
            categoria: "Triceps",
            usuario: "Yerkoala",
            valoracion: 3.9
        },
        {
            nombreRutina: "Super rutina de pecho",
            categoria: "Pecho",
            usuario: "Yerkoala",
            valoracion: 4.5
        },
        {
            nombreRutina: "Piernas para morir",
            categoria: "Pierna",
            usuario: "Yerkoala",
            valoracion: 2.1
        }
    ])
    const categoriaSelect = ["FullBody", "Push/Empuje","Pull/Jalon","Hombro", "Pecho", "Pierna", "Triceps","Biceps","Espalda","Abdomen"]

    const [prueba, setprueba] = useState([
        {
            nombreRutina: "Super rutina de pecho",
            categoria: "Pecho",
            usuario: "Yerkoala",
            valoracion: 4.5,
            ejercicios:[
                "Hola",
                "Que tal",
                "Hello"
            ]
        },
        {
            nombreRutina: "Piernas para morir",
            categoria: "Pierna",
            usuario: "Feñusin",
            valoracion: 2.1
        },
        {
            nombreRutina: "Master triceps",
            categoria: "Triceps",
            usuario: "Yerkoala",
            valoracion: 3.9
        },
        {
            nombreRutina: "Super rutina de pecho",
            categoria: "Pecho",
            usuario: "Yerkoala",
            valoracion: 4.5
        },
        {
            nombreRutina: "Piernas para morir",
            categoria: "Pierna",
            usuario: "Yerkoala",
            valoracion: 2.1
        }
    ])

    const buscaRutinaNombre = (palabraBuscada) => {
        const ruti = prueba.filter(user => user.nombreRutina.includes(palabraBuscada))
        setbuscador(ruti)
    }

    const buscaRutinaCategoria = (categoriaBuscada) => {
        const ruti = prueba.filter(user => user.categoria.includes(categoriaBuscada))
        setbuscador(ruti)
    }

    const handleOnChange = (e) => {
        buscaRutinaNombre(e.target.value)
    }

    const handleOnChangeSelect = (event) => {
        buscaRutinaCategoria(event.target.value)
    }

    return (
        <div className='principalPantallaBuscar'>
            <div>
                <h1>Rutinas</h1>
                <select id="categoria" name="categoria" onChange={handleOnChangeSelect}>
                    <option value="">Categoría</option>
                    {categoriaSelect.map((e, index) =>
                        <option key={index} value={e}>{e}</option>
                    )}
                </select>
                <ion-icon name="search"></ion-icon>
                <input type="text" onChange={handleOnChange} />
            </div>
            <div className="contenedorListaRutinas">
                <div className='listaRutinas'>
                    {buscador.length === 0 ? <h1 style={{ textAlign: "center" }}>No hay rutinas disponibles</h1> : buscador.map((element, index) =>
                        <CartaListaRutina key={index} lista={element} />
                    )}
                </div>
            </div>
            <IonButton className='botonSubirRutina' color="dark">Subir Rutina</IonButton>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />

        </div>
    )
}

export default PrincipalBuscar