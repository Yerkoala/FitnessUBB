import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { useBorrarRutinaContext } from '../../provider/RutinasProvider'
import { Link } from 'react-router-dom';

const TarjetaRutina = ({ titulo, categoria }) => {
    const borrarRutina = useBorrarRutinaContext()
    const [longPress, setLongPress] = useState(false)

    const startTimer = () => {
        const timer = setTimeout(() => {
            setLongPress(true)
        }, 1500)
        return timer
    }

    const cancelTimer = (timer) => {
        clearTimeout(timer)
    }

    const handleTouchStart = (e) => {
        const timer = startTimer()
        e.persist()
        e.target.dataset.longPressTimer = timer
    }

    const handleTouchEnd = (e) => {
        const timer = e.target.dataset.longPressTimer
        cancelTimer(timer)
        if (longPress) {
            if (window.confirm('Seguro que desea borrar esta rutina?')) {
                borrarRutina(categoria, titulo)
            }
        }
        setLongPress(false)
    }

    return (
        <div className='rutinaTarjeta' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Link to={`/home/${categoria}/${titulo}`}>
                <h2>{titulo}</h2>
            </Link>
            {/* {longPress && <IonIcon className='trashIcon' icon={trashOutline} />} */}
            <Link to={`/home/${categoria}/${titulo}`}>
                <IonIcon className='trashIcon' icon={chevronForwardOutline} />
            </Link>
        </div>
    )
}

export default TarjetaRutina