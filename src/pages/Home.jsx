import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header/Header';
import '../components/style.css';
import PrincipalHome from '../components/Home/PrincipalHome';


const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <PrincipalHome/>        
      </IonContent>
    </IonPage>
  );
};

export default Home;
