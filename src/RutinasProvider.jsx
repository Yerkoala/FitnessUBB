import React, { useContext, useState} from "react"

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
                ejercicios: ["Remo en máquina","Press banca inclinado con mancuernas", "Press de hombro con mancuernas","Extensión de tríceps con cable de agarre inverso con barra","Curl alterno con mancuernas", "Sentadilla", "Extensión de piernas"],
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
                ejercicios: ["Press banca inclinado con mancuernas", "Cruce de poleas","Press de banca inclinado con barra","Aperturas con mancuernas"],
            },
            {
                nombre: "Rutina 2",
                ejercicios: ["Press de banca en máquina sentado", "Press de banca declinado con barra","Press de banca declinado con mancuernas","Fondos en barras paralelas"],
            },
        ],
        Espalda: [
            {
                nombre: "Rutina 1 Espalda",
                ejercicios: ["Remo con mancuerna a una mano", "Jalón con agarre ancho","Remo en máquina","Jalón al pecho con agarre cerrado","Elevaciones en barra fija con agarre supinado"],
            },
            {
                nombre: "Rutina 2 Espalda",
                ejercicios: ["Press de banca en máquina sentado", "Press de banca declinado con barra","Press de banca declinado con mancuernas","Fondos en barras paralelas"],
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