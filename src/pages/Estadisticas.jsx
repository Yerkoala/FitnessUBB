import {IonContent, IonPage} from '@ionic/react';
import PrincipalEstadisticas from '../components/Estadisticas/PrincipalEstadisticas'
import Navbar from '../components/Navbar/Navbar'
import '../components/style.css';

const Estadisticas = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PrincipalEstadisticas/>  
        <Navbar/>      
      </IonContent>
    </IonPage>
  );
};
export default Estadisticas