import { useState } from 'react';
import './style.css';
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
        <ion-icon name="person"></ion-icon>
        <button onClick={abrirModal}><strong>Iniciar Sesion</strong></button>
      </div>
      <Login abierto={abierto} cerrarModal={cerrarModal}/>
    </div>

  );
};

export default Header;
