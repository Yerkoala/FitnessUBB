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
            valoracion: 4.5
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
    const categoriaSelect = ["Categoria", "FullBody", "Push/Empuje", "Pecho", "Pierna"]

    const [prueba, setprueba] = useState([
        {
            nombreRutina: "Super rutina de pecho",
            categoria: "Pecho",
            usuario: "Yerkoala",
            valoracion: 4.5
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

    const buscaRutina = (palabraBuscada) => {
        const ruti = prueba.filter(user => user.nombreRutina.includes(palabraBuscada))
        setbuscador(ruti)
    }

    const handleOnChange = (e) => {
        buscaRutina(e.target.value)
    }

    return (
        <div className='principalPantallaBuscar'>
            <div>
                <h1>Rutinas</h1>
                <select id="mi-select" name="mi-select">
                    {categoriaSelect.map((e) =>
                        <option value={e}>{e}</option>
                    )}

                    {/*                     <option value="">Categoría</option>
                    <option value="opcion1">FullBody</option>
                    <option value="opcion2">Push/Empuje</option>
                    <option value="opcion3">Pull/Jalon</option>
                    <option value="opcion3">Pecho</option>
                    <option value="opcion3">Hombro</option>
                    <option value="opcion3">Triceps</option>
                    <option value="opcion3">Biceps</option>
                    <option value="opcion3">Espalda</option>
                    <option value="opcion3">Abdomen</option>
                    <option value="opcion3">Pierna</option> */}
                </select>
                <ion-icon name="search"></ion-icon>
                <input type="text" onChange={handleOnChange} />
            </div>
            <div className="contenedorListaRutinas">
                <div className='listaRutinas'>
                    {buscador.length===0? <h1 style={{textAlign:"center"}}>No hay rutinas con este nombre</h1>: buscador.map((element, index) =>
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