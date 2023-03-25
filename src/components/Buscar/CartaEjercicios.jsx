import { IonButton } from '@ionic/react';
import '../style.css';
import ValoracionEstrellas from './ValoracionEstrellas'

const CartaEjercicios = ({ isOpen, cerrarModal, element, ejercicios }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  


  return (
    <div className={isOpen ? "cartaEjercicioFondo" : "cartaCerradoEjercicio"} onClick={cerrarModal}>
      <div className='Modal' onClick={handleModalDialogClick}>
        <h1>{element.nombreRutina}</h1>
        <div className="Subtitulo">
          <h2>{element.categoria}</h2>
          <h5>{element.usuario}</h5>
        </div>
        <ValoracionEstrellas /*AQUI DEBERIA PASAR EL ID Y LOS ELEMENTOS QUE REEMPLAZAN */ id={element.id}/>
        <div className='Ejercicios'>
          {ejercicios.map((e, index) =>
            <p key={index}>{e}</p>)}
        </div>
        <IonButton color='dark'>Descargar</IonButton>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaEjercicios