import { IonButton, IonIcon } from '@ionic/react';
import { starOutline } from 'ionicons/icons';
import '../style.css';

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
        <div className='ModalIconos' >
          <IonIcon className='iconoValoracion' icon={starOutline}></IonIcon>
          <IonIcon className='iconoValoracion' icon={starOutline}></IonIcon>
          <IonIcon className='iconoValoracion' icon={starOutline}></IonIcon>
          <IonIcon className='iconoValoracion' icon={starOutline}></IonIcon>
          <IonIcon className='iconoValoracion' icon={starOutline}></IonIcon>
        </div>
        <div className='Ejercicios'>
          {ejercicios.map((e, index) =>
            <p key={index}>{e}</p>)}
        </div>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaEjercicios