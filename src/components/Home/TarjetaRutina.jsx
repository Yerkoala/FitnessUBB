import { IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useBorrarRutinaContext } from '../../RutinasProvider'

const TarjetaRutina = ({ titulo, categoria }) => {
    const borrarRutina = useBorrarRutinaContext()

    const eliminarRutina = () => {
        if (window.confirm('Seguro que desea borrar esta rutina?')) {
            borrarRutina(categoria, titulo)
        }
    }

    const handleClick = (e) => {
        e.stopPropagation();
        console.log(titulo)
      }

    return (
        <div className='rutinaTarjeta' onClick={handleClick}>
            <h2>{titulo}</h2>
            <IonIcon className='trashIcon' icon={trashOutline} onClick={eliminarRutina}></IonIcon>
        </div>
    )
}

export default TarjetaRutina