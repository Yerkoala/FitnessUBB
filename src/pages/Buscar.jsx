import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header/Header';
import PrincipalBuscar from '../components/Buscar/PrincipalBuscar';
import '../components/style.css';



const Buscar = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <PrincipalBuscar/>
      </IonContent>
    </IonPage>
  );
};

export default Buscar;
