import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { starOutline, star, checkmarkCircleOutline } from 'ionicons/icons';
import { db } from "../../firebase"
import { updateDoc, doc, getDoc } from "firebase/firestore";

const ValoracionEstrellas = ({ id }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    useEffect(() => {
        setSelectedStars(0);
    }, []);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    const mostrarValoracion = async () => {
        const rutinaRef = doc(db, "rutinas", id);
        const obtenerDoc= await getDoc(rutinaRef)
        const nuevaValoracion=[...obtenerDoc.data().valoracion,selectedStars]
        // Set the "capital" field of the city 'DC'
        await updateDoc(rutinaRef, {
            valoracion: nuevaValoracion
        });
        
        console.log(nuevaValoracion)
        console.log(selectedStars)
        console.log(id)
    }

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < selectedStars) {
                stars.push(<IonIcon className='iconoValoracion' key={i} icon={star} onClick={() => handleStarClick(i)} />);
            } else {
                stars.push(<IonIcon className='iconoValoracion' key={i} icon={starOutline} onClick={() => handleStarClick(i)} />);
            }
        }
        return stars;
    };

    return (
        <div className='ModalIconos'>
            {renderStars()}
            <IonIcon className='checkValoracion' icon={checkmarkCircleOutline} onClick={mostrarValoracion}></IonIcon>
        </div>
    );
}
export default ValoracionEstrellas