import { IonButton } from '@ionic/react';
import '../style.css';
import ValoracionEstrellas from './ValoracionEstrellas'
import rutinas from '../../rutinas';

const CartaEjercicios = ({ isOpen, cerrarModal, element, ejerciciosArreglo }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  
  const descargarRutina=()=>{
    if (window.confirm('Seguro que desea descargar esta rutina?')) {
      const nuevaRutina={
        nombre: element.nombreRutina,
        ejercicios: ejerciciosArreglo
      }
      rutinas[0].Fullbody.push(nuevaRutina);
  }}

  const mostrarRutinas=()=>{
    console.log(rutinas)
  }


  return (
    <div className={isOpen ? "cartaEjercicioFondo" : "cartaCerradoEjercicio"} onClick={cerrarModal}>
      <div className='Modal' onClick={handleModalDialogClick}>
        <h1>{element.nombreRutina}</h1>
        <div className="Subtitulo">
          <h2>{element.categoria}</h2>
          <h5>{element.usuario}</h5>
        </div>
        <ValoracionEstrellas /*AQUI DEBERIA PASAR EL ID Y LOS ELEMENTOS QUE REEMPLAZAN */ id={element.id}/>
        <div className='Ejercicios'>
          {ejerciciosArreglo.map((e, index) =>
            <p key={index}>{e}</p>)}
        </div>
        <IonButton color='dark' onClick={mostrarRutinas}>Descargar</IonButton>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaEjercicios