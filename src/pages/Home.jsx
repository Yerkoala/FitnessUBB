import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header';
import '../components/style.css';
import Principal from '../components/Principal';


const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <Principal/>        
      </IonContent>
    </IonPage>
  );
};

export default Home;
