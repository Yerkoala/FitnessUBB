import { IonButton, IonIcon } from '@ionic/react'
import { addCircle, options } from 'ionicons/icons';
import React, { useState } from 'react'

const CartaSubirRutina = ({ isOpen, cerrarModal, categoriaSelect }) => {

  const [elementos, setElementos] = useState(3)

  const ejercicios = ["holanda", "que talca", "como andamio"]
  const series = ["3", "3/4", "4", "4/5", "5"]

  return (
    <div className={isOpen ? 'cartaSubirRutina' : 'cartaCerradoSubirRutina'}>
      <div className='subirRutinaModal'>
        <div className='nombreRutinaDiv'>
          <h1>Nombre de la rutina</h1>
          <input type="text" />
        </div>
        <div className='ejerciciosRutinaDiv'>
          <select name="categoria" id="categoria">
            <option value="">Categoria</option>
            {categoriaSelect.map((e, index) =>
              <option key={index} value={e}>{e}</option>
            )}
          </select>
          <h1>Ejercicios</h1>
        </div>
        <div>
          <div className='selectsDiv'>
            {Array(elementos).fill(0).map((_, index) => 
              <div>
                <select name="ejercicios" id="ejericicos">
                <option value="Ejercicios">Ejercicio</option>
                {ejercicios.map((e,index)=>
                  <option value={e}>{e}</option>
                )}
                <option value="Pecho">Pecho</option>
              </select>
              <select name="serie" id="serie">
                <option value="">Series</option>
                {series.map((e,index)=>
                <option value={e}>{e}</option>
                )}
              </select>
              </div>
            )}
          </div>
        </div>

        <div className='botonesSubirYAgregar'>
          <IonIcon class='agregarIcono' icon={addCircle} onClick={() => setElementos(elementos + 1)}></IonIcon>
          <IonButton color='dark'>Subir rutina</IonButton>
        </div>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaSubirRutina