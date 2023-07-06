import { IonButton } from '@ionic/react'
import { useRutinaContext } from '../../provider/RutinasProvider'
import CheckEjerciciosDiv from './CheckEjerciciosDiv'
import { useParams } from 'react-router-dom'
import "../style.css"

const CheckEjercicios = () => {
  const { categoria, nombre } = useParams()
  const rutinaObjeto = useRutinaContext()

  const buscarEjercicios = (nombre, categoria) => {
    const ejercicios = rutinaObjeto[categoria].find(rutina => rutina.nombre === nombre);
    return ejercicios ? ejercicios.ejercicios : [];
  }

  const ejerciciosArreglo = buscarEjercicios(nombre, categoria)

  return (
    <div className="checkEjerciciosPantalla">
      <h2>{nombre}</h2>
      {ejerciciosArreglo.map((e, index) =>
        <CheckEjerciciosDiv key={index} ejercicionombre={e} />
      )}
      <IonButton routerLink='/' className='atrasIonButton' color='dark'>Atras</IonButton>
    </div>
  )
}

export default CheckEjercicios