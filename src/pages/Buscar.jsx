import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header/Header';
import PrincipalBuscar from '../components/Buscar/PrincipalBuscar';
import '../components/style.css';
import Navbar from '../components/Navbar/Navbar';

const Buscar = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <PrincipalBuscar/>
        <Navbar/>
      </IonContent>
    </IonPage>
  );
};
export default Buscar;
