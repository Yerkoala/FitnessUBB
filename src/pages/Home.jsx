import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header/Header';
import '../components/style.css';
import PrincipalHome from '../components/Home/PrincipalHome';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <PrincipalHome/>  
        <Navbar/>      
      </IonContent>
    </IonPage>
  );
};
export default Home;
