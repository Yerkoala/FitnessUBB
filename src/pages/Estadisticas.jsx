import {IonContent, IonPage} from '@ionic/react';
import PrincipalEstadisticas from '../components/Estadisticas/PrincipalEstadisticas'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import '../components/style.css';

const Estadisticas = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <PrincipalEstadisticas/>  
        <Navbar/>      
      </IonContent>
    </IonPage>
  );
};
export default Estadisticas