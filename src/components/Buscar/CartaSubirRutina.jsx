import { IonButton } from '@ionic/react'
import React from 'react'

const CartaSubirRutina = ({ isOpen, cerrarModal }) => {

  return (
    <div className={isOpen ? 'cartaSubirRutina' : 'cartaCerradoSubirRutina'}>
      <div className='subirRutinaModal'>

      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaSubirRutina