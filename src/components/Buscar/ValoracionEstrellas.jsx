import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { starOutline, star,checkmarkCircleOutline } from 'ionicons/icons';

const ValoracionEstrellas = () => {
    const [selectedStars, setSelectedStars] = useState(0);

    useEffect(() => {
        setSelectedStars(0);
      }, []);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
        console.log(index+1)
    };

    const mostrarValoracion =()=>{
        console.log(selectedStars)
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