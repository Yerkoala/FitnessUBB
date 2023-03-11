import { IonButton, IonIcon} from '@ionic/react'
import React from 'react'
import "../style.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <IonButton routerLink='/buscar' className='navbarButton' fill="clear">
        <IonIcon name='search' className='navbarIcon'>
        </IonIcon>
      </IonButton>
      <IonButton routerLink='/home' className='navbarButton' id='navbarButtonMedio' fill="clear">
        <IonIcon name='home' className='navbarIcon'>
        </IonIcon>
      </IonButton>
      <IonButton routerLink='/estadisticas' className='navbarButton' fill="clear">
        <IonIcon name='trending-up' className='navbarIcon'>
        </IonIcon>
      </IonButton>
    </div>
  )
}

export default Navbar