import React, { useContext, useState,useEffect } from "react"

const estadisticasContext = React.createContext()
const agregarProgresoContext = React.createContext()

export function useEstadisticasContext() {
    return useContext(estadisticasContext)
}

export function useAgregarProgresoContext() {
    return useContext(agregarProgresoContext)
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

    useEffect(() => {
        const storedEstadisticasObjeto = localStorage.getItem("estadisticasObjeto");
        if (storedEstadisticasObjeto) {
            const parsedEstadisticasObjeto = JSON.parse(storedEstadisticasObjeto);
            if (JSON.stringify(parsedEstadisticasObjeto) !== JSON.stringify(estadisticasObjeto)) {
                setEstadisticasObjeto(parsedEstadisticasObjeto);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("estadisticasObjeto", JSON.stringify(estadisticasObjeto));
    }, [estadisticasObjeto]);


    return (
        <estadisticasContext.Provider value={estadisticasObjeto}>
            <agregarProgresoContext.Provider value={agregarProgreso}>
                    {children}
            </agregarProgresoContext.Provider>
        </estadisticasContext.Provider>

    )
}