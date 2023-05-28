import { IonButton } from '@ionic/react';
import '../style.css';
import ValoracionEstrellas from './ValoracionEstrellas'
import {useAgregarRutinaContext } from '../../RutinasProvider'

const CartaEjercicios = ({ isOpen, cerrarModal, element, ejerciciosArreglo, logueado }) => {
  const agregarRutina = useAgregarRutinaContext()

  const handleModalDialogClick = (e) => {
    e.stopPropagation()
  }
  

  const descargarRutina=()=>{
    if (window.confirm('Seguro que desea descargar esta rutina?')) {
      agregarRutina(element.nombreRutina,ejerciciosArreglo,element.categoria)
      alert("Rutina descargada con ")
      cerrarModal()
  }}


  return (
    <div className={isOpen ? "cartaEjercicioFondo" : "cartaCerradoEjercicio"} onClick={cerrarModal}>
      <div className='Modal' onClick={handleModalDialogClick}>
        <h1>{element.nombreRutina}</h1>
        <div className="Subtitulo">
          <h2>{element.categoria}</h2>
          <h5>{element.usuario}</h5>
        </div>
        <ValoracionEstrellas id={element.id} logueado={logueado}/>
        <div className='Ejercicios'>
          {ejerciciosArreglo.map((e, index) =>
            <p key={index}>{e}</p>)}
        </div>
        <IonButton color='dark' onClick={descargarRutina}>Descargar</IonButton>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaEjercicios