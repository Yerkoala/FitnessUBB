import { IonButton, IonIcon } from '@ionic/react'
import { ellipseOutline, ellipse } from 'ionicons/icons'
import ejercicios from '../../ejercicios'
import { useEffect, useState} from 'react'
import { useAgregarProgresoContext } from '../../provider/EstadisticasProvider'
import Cronometro from './Cronometro'
import '../style.css'

const CronometroPantalla = ({ ejercicionombre, isOpen, abrirCerrar, marcarCheck }) => {
    const agregarProgreso = useAgregarProgresoContext()

    /* Estado para controlar el número de íconos de círculo llenos */
    const [iconosLlenos, setIconosLlenos] = useState(0)
    const [botonBloqueado, setBotonBloqueado] = useState(false)
    const [peso, setPeso] = useState([])
    const [repeticiones, setRepeticiones] = useState([])
    const [progreso, setProgreso] = useState([])

    /*A penas se monta el componente me trae la imagen del ejercicio*/
    const [imagenEjercicio, setimagenEjercicio] = useState(null);
    useEffect(() => {
        const ejercicioEncontrado = ejercicios.find(
            (ejercicio) => ejercicio.nombre === ejercicionombre
        );
        if (ejercicioEncontrado) {
            setimagenEjercicio(ejercicioEncontrado.img)
        }
    }, [])


    /* Función para agregar los círculos correspondientes a la cantidad de series */
    const [seriesSeleccionadas, setSeriesSeleccionadas] = useState(2)
    const handleSeriesChange = (e) => {
        setBotonBloqueado(false)
        setSeriesSeleccionadas(parseInt(e.target.value)); // Se convierte el valor de string a entero
    };


    const handleIniciarDescanso = () => {
        const nuevoProgreso = {
            peso: peso,
            repeticiones: repeticiones,
            fecha: new Date().toLocaleDateString() // Obtiene la fecha actual del dispositivo
        }

        setProgreso((prevProgreso) => [...prevProgreso, nuevoProgreso])

        if (iconosLlenos + 1 < seriesSeleccionadas) {
            setIconosLlenos((prev) => prev + 1)
        } else if (iconosLlenos + 1 === seriesSeleccionadas) {
            setIconosLlenos((prev) => prev + 1)
            setBotonBloqueado(true)
        }

        setPeso('');
        setRepeticiones('')
    }

    const enviarDatos = () => {
        if (window.confirm("¿Deseas enviar los datos? Asegurate de haber completado tus series")) {
            agregarProgreso(ejercicionombre, progreso)
            console.log(progreso)
            marcarCheck()
            abrirCerrar()
            setIconosLlenos(0)
        }
    }

    const handleOnClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={isOpen ? "cronometroPantalla" : "cronometroPantallaCerrado"} onClick={handleOnClick}>
            <h2 style={{ fontWeight: 'bold', fontSize: "35px" }}>{ejercicionombre}</h2>
            <div className="fondoFormularioDeCronometro">
                <div className="formularioDeCronometro">
                    <input className="inputsCronometro" id="peso" type="text" placeholder="Peso en kg" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    <input className="inputsCronometro" id="repeticiones" type="text" placeholder="Repeticiones" value={repeticiones} onChange={(e) => setRepeticiones(e.target.value)}  />

                    <select name="Series" id="" onChange={handleSeriesChange}>
                        <option value="2">Series</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="iconosCronometroDiv">
                {Array.from({ length: seriesSeleccionadas }, (_, index) => (
                    <IonIcon
                        key={index}
                        className={`iconoCronometro ${index < iconosLlenos ? 'relleno' : ''
                            }`}
                        icon={index < iconosLlenos ? ellipse : ellipseOutline}
                    />
                ))}
            </div>

            <Cronometro onIniciarDescanso={handleIniciarDescanso} botonBloqueado={botonBloqueado} peso={peso} repeticiones={repeticiones}/>

            <div className="contenedorDeImagen">
                <img className="imagenDeCronometro" src={imagenEjercicio} alt="" />
            </div>

            <IonButton onClick={abrirCerrar} className="atrasIonButton" color="dark">Atrás</IonButton>
            <IonButton onClick={enviarDatos} className="enviarIonButton" color="dark">Enviar</IonButton>
        </div>
    )
}

export default CronometroPantalla;