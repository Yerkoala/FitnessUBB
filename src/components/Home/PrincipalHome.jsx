import "../style.css"
import MANCUERNA from "../../images/mancuerna.png"
import CartaRutinaPropias from './CartaRutinaPropias'
//import rutinas from '../../rutinas'
import { useRutinaContext, useAgregarRutinaContext } from '../../RutinasProvider'

const PrincipalHome = () => {
    const rutinasObjeto = useRutinaContext()
    const agregarRutina = useAgregarRutinaContext()

    
    const mostrarRutina2 = (categoria) => {
        const nombres = rutinasObjeto[categoria].map((rutina) => rutina.nombre);
        console.log(nombres);
      }


    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                {Object.keys(rutinasObjeto).map((e, index) =>
                    <CartaRutinaPropias key={index} titulo={e} mostrarRutina={mostrarRutina2} nombres={rutinasObjeto[e].map((rutina) => rutina.nombre)}/>
                )}
                <button onClick={() => agregarRutina("Rutina3fullbod", ["q", "asd"])}>AGREGAR</button>
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalHome