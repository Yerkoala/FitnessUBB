import React, { useState, useEffect, useRef } from 'react';
import "../style.css"
import { IonButton } from '@ionic/react';

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes <= 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    return minutes + ':' + seconds
}

const Cronometro = ({ onIniciarDescanso,botonBloqueado}) => {
    const [segundos,setSegundos]=useState(5)  
    const [countdown, setCountdown] = useState(segundos)
    const timerId = useRef()

    const comienzaTimer = () => {
        if(botonBloqueado){
            alert("Ya completaste las series por favor envia tus resultados")
        }
        else{
        onIniciarDescanso()
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)}
    }

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
            setCountdown(segundos)
        }
    }, [countdown])

    const abrirCuadroDialogo = () => {
        const newSegundos = parseInt(window.prompt("Anotar tiempo descanso en segundos"));
        if (!isNaN(newSegundos)) {
          setSegundos(newSegundos);
          setCountdown(newSegundos);
        }
      };
    
      useEffect(() => {
        setCountdown(segundos);
      }, [segundos]);


    return (
        <div className='temporizador'>
            <h1 onClick={abrirCuadroDialogo}>{formatTime(countdown)}</h1>
            <IonButton className='botonDescanso' onClick={comienzaTimer} color={'dark'}>Iniciar Descanso</IonButton>
        </div>
    );
};

export default Cronometro;