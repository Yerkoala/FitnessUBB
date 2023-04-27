import React, { useContext, useState, useEffect } from "react"

const rutinaContext = React.createContext()
const agregarRutinaContext = React.createContext()
const borrarRutinaContext = React.createContext()

export function useRutinaContext() {
    return useContext(rutinaContext)
}

export function useAgregarRutinaContext() {
    return useContext(agregarRutinaContext)
}

export function useBorrarRutinaContext() {
    return useContext(borrarRutinaContext)
}

export function RutinasProvider({ children }) {

    const [rutinaObjeto, setRutinaObjeto] = useState({
        Fullbody: [
            {
                nombre: "Rutina Fullbody 1",
                ejercicios: ["Press de banca", "Sentadilla"],
            },
            {
                nombre: "Rutina 2",
                ejercicios: ["Ejemplo 1", "Ejemplo 2"],
            },
        ],

        Push: [
            {
                nombre: "Push 1",
                ejercicios: ["Ejemploxxx 1", "Ejemplo 2"],
            },
            {
                nombre: "Push 2",
                ejercicios: ["Ejemplo 1", "Ejemplo 2"],
            },
            {
                nombre: "Push 3",
                ejercicios: ["Ejercicio 1", "Ejercicio 2", "Ejercicio 3", "Ejercicio 4"]
            }
        ],
        Pull: [
            {
                nombre: "Pull/Empuje 1",
                ejercicios: ["Ejemploxxx 1", "Ejemplo 2"],
            },
            {
                nombre: "Pull/Empuje 2",
                ejercicios: ["Ejemplo 1", "Ejemplo 2"],
            },
        ],
        Pecho: [
            {
                nombre: "Rutina 1",
                ejercicios: ["Ejemploxxx 1", "Ejemplo 2"],
            },
            {
                nombre: "Rutina 2",
                ejercicios: ["Ejemplo 1", "Ejemplo 2"],
            },
        ]
    }
    )
    const agregarRutina = (nombre, ejercicios, categoria) => {
        const nuevaRutina = {
            nombre: nombre,
            ejercicios: ejercicios,
        };

        setRutinaObjeto((prevState) => ({
            ...prevState, [categoria]: [...prevState[categoria], nuevaRutina]
        }))
    }

    const borrarRutina = (categoria, nombre) => {
        setRutinaObjeto((prevState) => {
            const nuevasRutinas = prevState[categoria].filter(
                (rutina) => rutina.nombre !== nombre
            )
            return { ...prevState, [categoria]: nuevasRutinas }
        })
    }



    return (
        <rutinaContext.Provider value={rutinaObjeto}>
            <agregarRutinaContext.Provider value={agregarRutina}>
                <borrarRutinaContext.Provider value={borrarRutina}>
                    {children}
                </borrarRutinaContext.Provider>
            </agregarRutinaContext.Provider>
        </rutinaContext.Provider>

    )
}