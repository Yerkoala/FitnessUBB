import { IonButton, IonIcon} from '@ionic/react'
import { search,home,trendingUp } from 'ionicons/icons';
import React from 'react'
import "../style.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <IonButton routerLink='/buscar' className='navbarButton' fill="clear">
        <IonIcon icon={search} className='navbarIcon'>
        </IonIcon>
      </IonButton>
      <IonButton routerLink='/home' className='navbarButton' id='navbarButtonMedio' fill="clear">
        <IonIcon icon={home} className='navbarIcon'>
        </IonIcon>
      </IonButton>
      <IonButton routerLink='/estadisticas' className='navbarButton' fill="clear">
        <IonIcon icon={trendingUp} className='navbarIcon'>
        </IonIcon>
      </IonButton>
    </div>
  )
}

export default Navbar