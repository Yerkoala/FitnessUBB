import React, { useContext, useState } from "react"

const estadisticasContext = React.createContext()
const agregarProgresoContext = React.createContext()
const borrarRutinaContext = React.createContext()

export function useEstadisticasContext() {
    return useContext(estadisticasContext)
}

export function useAgregarProgresoContext() {
    return useContext(agregarProgresoContext)
}

export function useBorrarRutinaContext() {
    return useContext(borrarRutinaContext)
}

export function EstadisticasProvider({ children }) {

    const [estadisticasObjeto, setEstadisticasObjeto] = useState({})

    const agregarProgreso = (nombreEjercicio, progreso) => {
        setEstadisticasObjeto((prevState) => {
            if (prevState[nombreEjercicio]) {
                // Si el nombreEjercicio ya existe, concatenar el nuevo progreso
                return {
                    ...prevState,
                    [nombreEjercicio]: [...prevState[nombreEjercicio], ...progreso]
                }
            } else {
                // Si el nombreEjercicio no existe, crear una nueva entrada
                return {
                    ...prevState,
                    [nombreEjercicio]: progreso
                }
            }
        })
    }



    const borrarRutina = (categoria, nombre) => {

    }



    return (
        <estadisticasContext.Provider value={estadisticasObjeto}>
            <agregarProgresoContext.Provider value={agregarProgreso}>
                <borrarRutinaContext.Provider value={borrarRutina}>
                    {children}
                </borrarRutinaContext.Provider>
            </agregarProgresoContext.Provider>
        </estadisticasContext.Provider>

    )
}