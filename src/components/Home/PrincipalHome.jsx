import "../style.css"
import MANCUERNA from "../../images/mancuerna.png"
import CartaRutinaPropias from './CartaRutinaPropias'
//import rutinas from '../../rutinas'
import { useRutinaContext } from '../../provider/RutinasProvider'
import { IonButton } from "@ionic/react"
import CrearRutina from "./CrearRutina"
import { useState} from "react"

const PrincipalHome = () => {

    const rutinasObjeto = useRutinaContext()
    const [abierto, setAbierto] = useState(false)

    const abrirCerrarCrearRutina = () => {
        setAbierto(!abierto)
    }

    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                <IonButton className="botonCrearRutina" color={"dark"} onClick={abrirCerrarCrearRutina}>Crear Rutina</IonButton>
                {Object.keys(rutinasObjeto).map((e, index) =>
                    <CartaRutinaPropias key={index} titulo={e} nombreRutinas={rutinasObjeto[e].map((rutina) => rutina.nombre)} />
                )}
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
            <CrearRutina isOpen={abierto} cerrarModal={abrirCerrarCrearRutina} />
        </div>
    )
}

export default PrincipalHome