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
                nombre: "Rutina Fullbody 2",
                ejercicios: ["Cruce de poleas", "Press de banca en máquina sentado", "Remo con mancuerna a una mano", "Remo con barra", "Curl con barra EZ", "Extensión de tríceps en polea", "Prensa de piernas"],
            },
        ],

        Push: [
            {
                nombre: "Rutina Push 1",
                ejercicios: ["Press de banca con barra", "Press banca inclinado con mancuernas","Press de banca en máquina sentado","Aperturas en máquina Peck Deck o Contractora", "Cruce de poleas", "Extensión de tríceps en polea","Extensión de tríceps con cable a una mano con agarre supinado"],
            },
            {
                nombre: "Rutina Push 2",
                ejercicios: ["Cruce de poleas", "Press de banca con mancuernas","Press de banca en máquina sentado", "Press de hombro con mancuernas", "Extensión de tríceps tumbado","Extensión de tríceps con mancuernas por encima de la cabeza"],
            }
        ],
        Pull: [
            {
                nombre: "Rutina Pull 1",
                ejercicios: ["Peso muerto con barra", "Remo en barra T", "Elevaciones en barra fija", "Jalón al pecho con agarre invertido","Curl con barra EZ","Curl alterno de martillo con mancuernas","Curl inclinado con mancuernas"],
            },
            {
                nombre: "Rutina Pull 2",
                ejercicios: ["Remo en barra T", "Jalón con agarre ancho", "Remo en máquina", "Jalón tras nuca","Curl con barra EZ", "Curl inclinado con mancuernas", "Curl de cable en polea baja a una mano"],
            }
        ],
        Pecho: [
            {
                nombre: "Rutina Pecho 1",
                ejercicios: ["Press banca inclinado con mancuernas", "Cruce de poleas","Press de banca inclinado con barra","Aperturas con mancuernas", "Press de banca en máquina sentado"],
            },
            {
                nombre: "Rutina Pecho 2",
                ejercicios: ["Press de banca en máquina sentado", "Press de banca declinado con barra","Press de banca declinado con mancuernas","Fondos en barras paralelas", "Flexiones"],
            },
        ],
        Espalda: [
            {
                nombre: "Rutina Espalda 1",
                ejercicios: ["Remo con mancuerna a una mano", "Jalón con agarre ancho","Remo en máquina","Jalón al pecho con agarre cerrado","Elevaciones en barra fija con agarre supinado"],
            },
            {
                nombre: "Rutina Espalda 2",
                ejercicios: ["Remo con mancuerna a una mano", "Jalón con agarre ancho","Remo en máquina","Jalón al pecho con agarre cerrado", "Remo con barra"],
            },
        ],
        Hombro: [
            {
                nombre: "Rutina Hombro 1",
                ejercicios: ["Press de hombro con mancuernas","Elevación lateral con mancuernas", "Press de hombro con mancuernas","Elevación frontal con mancuernas","Cruces inversos en polea alta"],
            },
            {
                nombre: "Rutina Hombro 2",
                ejercicios: ["Press de hombros en Máquina Smith", "Remo alto con barra","Elevaciones posteriores para hombros (Pájaro)","Elevación lateral con cable a una mano","Press Militar con mancuernas"],
            },
        ],

        Brazo: [
            {
                nombre: "Rutina Brazo 1",
                ejercicios: ["Curl con cuerda en polea", "Curl con barra EZ","Curl de predicador con barra EZ","Extensión de tríceps tumbado","Extensión de tríceps en polea"],
            },
            {
                nombre: "Rutina Brazo 2",
                ejercicios: ["Curl alterno de martillo con mancuernas", "Curl inclinado con mancuernas","Curl concentrado con mancuernas","Extensión de tríceps en polea con cuerda","Extensión de tríceps con mancuernas por encima de la cabeza"],
            }
        ],
        Triceps: [
            {
                nombre: "Rutina Triceps 1",
                ejercicios: ["Extensión de tríceps en polea con cuerda","Extensión de tríceps con mancuernas por encima de la cabeza", "Extensión de tríceps tumbado", "Press Banca con agarre cerrado","Patadas traseras"],
            },
            {
                nombre: "Rutina Triceps 2",
                ejercicios: ["Extensión de tríceps con cable de agarre inverso con barra", "Extensión de tríceps con cable a una mano", "Extensión de tríceps con cable a una mano con agarre supinado","Extensión de tríceps con mancuernas tumbado","Press francés sentado con barra"],
            }
        ],
        Biceps: [
            {
                nombre: "Rutina Biceps 1",
                ejercicios: ["Curl con cuerda en polea", "Curl con barra EZ","Curl alterno de martillo con mancuernas","Curl inclinado con mancuernas"],
            },
            {
                nombre: "Rutina Biceps 2",
                ejercicios: ["Curl concentrado con mancuernas", "Curl de cable en polea baja a una mano","Curl de cable con barra recta en polea baja","Extensión de muñeca con barra sentado"],
            },
        ],
        Abdomen: [
            {
                nombre: "Rutina Abdomen 1",
                ejercicios: ["Remo con mancuerna a una mano", "Jalón con agarre ancho","Remo en máquina","Jalón al pecho con agarre cerrado","Elevaciones en barra fija con agarre supinado"],
            },
            {
                nombre: "Rutina Abdomen 2",
                ejercicios: ["Press de banca en máquina sentado", "Press de banca declinado con barra","Press de banca declinado con mancuernas","Fondos en barras paralelas"],
            },
        ],
        Pierna: [
            {
                nombre: "Rutina Pierna 1",
                ejercicios: ["Press banca inclinado con mancuernas", "Cruce de poleas","Press de banca inclinado con barra","Aperturas con mancuernas"],
            },
            {
                nombre: "Rutina Pierna 2",
                ejercicios: ["Press de banca en máquina sentado", "Press de banca declinado con barra","Press de banca declinado con mancuernas","Fondos en barras paralelas"],
            },
        ],
        Gluteo: [
            {
                nombre: "Rutina Gluteo 1",
                ejercicios: ["Remo con mancuerna a una mano", "Jalón con agarre ancho","Remo en máquina","Jalón al pecho con agarre cerrado","Elevaciones en barra fija con agarre supinado"],
            },
            {
                nombre: "Rutina Gluteo 2",
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