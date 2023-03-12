import { IonIcon } from '@ionic/react';
import React from 'react'
import '../style.css';

const CartaEjercicios = ({ isOpen, cerrarModal, element}) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={isOpen ? "cartaEjercicioFondo" : "cartaCerrado"} onClick={cerrarModal}>
      <div className='Modal' onClick={handleModalDialogClick}>
        <h1>{element.nombreRutina}</h1>
        <div className="Subtitulo">
          <h2>{element.categoria}</h2>
          <h5>{element.usuario}</h5>
        </div>
        <div className='ModalIconos' >
          <IonIcon className='iconoValoracion' name='star-outline'></IonIcon>
          <IonIcon className='iconoValoracion' name='star-outline'></IonIcon>
          <IonIcon className='iconoValoracion' name='star-outline'></IonIcon>
          <IonIcon className='iconoValoracion' name='star-outline'></IonIcon>
          <IonIcon className='iconoValoracion' name='star-outline'></IonIcon>
        </div>
        <div className='Ejercicios'>
          <h1>aqui van ejercicios</h1>
        </div>
        <button onClick={cerrarModal}>Descargar rutina</button>
      </div>
    </div>
  )
}

export default CartaEjercicios