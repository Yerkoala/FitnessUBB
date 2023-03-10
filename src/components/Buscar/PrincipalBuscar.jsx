import React from 'react'
import MANCUERNA from "../../images/mancuerna.png"

const PrincipalBuscar = () => {
    return (
        <div className='principalPantallaBuscar'>
            <div>
                <h1>Rutinas</h1>
                <select id="mi-select" name="mi-select">
                    <option value="">Categoría</option>
                    <option value="opcion1">FullBody</option>
                    <option value="opcion2">Push/Empuje</option>
                    <option value="opcion3">Pull/Jalon</option>
                    <option value="opcion3">Pecho</option>
                    <option value="opcion3">Hombro</option>
                    <option value="opcion3">Triceps</option>
                    <option value="opcion3">Biceps</option>
                    <option value="opcion3">Espalda</option>
                    <option value="opcion3">Abdomen</option>
                    <option value="opcion3">Pierna</option>
                </select>
                <ion-icon name="search"></ion-icon>
                <input type="text" />
            </div>
            <div>

            </div>
            <button>Subir</button>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
            <button>Atras</button>
        </div>
    )
}

export default PrincipalBuscar