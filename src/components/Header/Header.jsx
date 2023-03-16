import { useState } from 'react';
import { IonIcon } from '@ionic/react'
import { person } from 'ionicons/icons';
import '../style.css';
import Login from './Login';

const Header = () => {
  const [abierto, setabierto] = useState(false)
  const abrirModal =()=>{
    setabierto(true)
  }
  const cerrarModal = () => {
    setabierto(false)
  }
  return (
    <div>
      <div className="header">
        <IonIcon icon={person}></IonIcon>
        <button onClick={abrirModal}><strong>Iniciar Sesion</strong></button>
      </div>
      <Login abierto={abierto} cerrarModal={cerrarModal}/>
    </div>

  );
};

export default Header;
