import { useState,useEffect } from 'react';
import { IonIcon } from '@ionic/react'
import { person } from 'ionicons/icons';
import '../style.css';
import Login from './Login';
import { cerrarSesion, obtenerDisplayNameUsuario } from '../../firebase';


const Header = ({ sesionIniciada, logueado }) => {
  const [abierto, setabierto] = useState(false)
  const [displayName, setDisplayName] = useState(null)

  const abrirCerrar = () => {
    setabierto(!abierto)
  }

  const cerrar=()=>{
    if(window.confirm("¿Deseas cerrar la sesion?")){
      cerrarSesion()
      sesionIniciada()
    }
  }

  useEffect(() => {
    const unsubscribe = obtenerDisplayNameUsuario((name) => {
      setDisplayName(name);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <div>
      <div className="header">
        {!logueado &&
          <>
            <IonIcon icon={person}></IonIcon>
            <button onClick={abrirCerrar}><strong>Iniciar Sesion</strong></button>
          </>
        }
        {
          logueado &&
          <>
            <button onClick={cerrar}><strong>{displayName}</strong></button>
          </>
        }
      </div>
      <Login abierto={abierto} cerrarModal={abrirCerrar} sesionIniciada={sesionIniciada}/>
    </div>

  );
};

export default Header;
