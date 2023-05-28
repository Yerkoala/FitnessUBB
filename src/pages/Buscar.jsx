import { IonContent, IonPage } from '@ionic/react'
import Header from '../components/Header/Header'
import PrincipalBuscar from '../components/Buscar/PrincipalBuscar'
import '../components/style.css'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react'

const Buscar = () => {
  const [login, setLogin] = useState(false)
  const sesionIniciada = () => {
    setLogin(!login)
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header sesionIniciada={sesionIniciada} logueado={login} />
        <PrincipalBuscar logueado={login} />
        <Navbar />
      </IonContent>
    </IonPage>
  )
}
export default Buscar
