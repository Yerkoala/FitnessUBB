import "../style.css"
import MANCUERNA from "../../images/mancuerna.png"
import CartaRutinaPropias from './CartaRutinaPropias'
//import rutinas from '../../rutinas'
import { useRutinaContext} from '../../provider/RutinasProvider'

const PrincipalHome = () => {
    const rutinasObjeto = useRutinaContext()

    return (
        <div className='principalPantalla'>
            <h1 className='fitnessubbTitulo'>FitnessUBB</h1>
            <div className='principalCuerpo'>
                {Object.keys(rutinasObjeto).map((e, index) =>
                    <CartaRutinaPropias key={index} titulo={e} nombreRutinas={rutinasObjeto[e].map((rutina) => rutina.nombre)} />
                )}
            </div>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalHome