import React, { useState, useEffect, useRef } from 'react';
import "../style.css"
import { IonButton } from '@ionic/react';
import sonido from "../../images/sonido.mp3"

const formatTime = (time) => {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)

  if (minutes <= 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  return minutes + ':' + seconds
}

const Cronometro = ({ onIniciarDescanso, botonBloqueado, peso, repeticiones }) => {

  const play = () => {
    let count = 0

    const playSound = () => {
      new Audio(sonido).play()
      count++

      if (count < 3) {
        setTimeout(playSound, 3000)
      }
    }

    playSound()
  }

  const [segundos, setSegundos] = useState(5)
  const [countdown, setCountdown] = useState(segundos)
  const timerId = useRef()

  const comienzaTimer = () => {
    if (botonBloqueado ) {
      alert("Ya completaste las series por favor envia tus resultados")
    }else if (!peso) {
      alert("Por favor rellenar todos los campos")
    }else if (peso<0 || repeticiones<0) {
      alert("Por favor, ingresa datos válidos")
    }
    else {
      onIniciarDescanso()
      timerId.current = setInterval(() => {
        setCountdown(prev => prev - 1)
        if (countdown === 0) {
          play()
        }
      }, 1000)
      return () => clearInterval(timerId.current)
    }
  }

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current)
      play()
      setCountdown(segundos)
    }
  }, [countdown])

  const abrirCuadroDialogo = () => {
    const input = window.prompt("Anotar tiempo descanso en segundos");
    const newSegundos = parseInt(input);
  
    if (isNaN(newSegundos) || input.trim().length === 0 || newSegundos<0) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    setSegundos(newSegundos);
    setCountdown(newSegundos);
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