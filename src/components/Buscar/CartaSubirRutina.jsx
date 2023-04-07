import { IonButton, IonIcon } from '@ionic/react'
import { addCircle, options } from 'ionicons/icons';
import React, { useState } from 'react'

const CartaSubirRutina = ({ isOpen, cerrarModal, categoriaSelect }) => {

  const [elementos, setElementos] = useState(3)
  const [nombreDeRutina, setNombreDeRutina] = useState("")
  const [categoriaRutina, setCategoriaRutina] = useState("")
  const [ejerciciosObjeto,setEjerciciosObjeto]= useState([])

  //GUARDA EL NOMBRE DE LA RUTINA
  const handleChangeInputNombreRutina = (e) => {
    setNombreDeRutina(e.target.value)
  }
  //GUARDA LA CATEGORÍA DE LA RUTINA
  const handleChangeSelectCategoria = (e) => {
    setCategoriaRutina(e.target.value)
  }
  //GUARDA LOS EJERCICIOS QUE TIENEN LA RUTINA
  const handleEjerciciosRutina=(e)=>{
    setEjerciciosObjeto([...ejerciciosObjeto, e.target.value])
  }

  const ejercicios = ["holanda", "que talca", "como andamio"]
  const series = ["3", "3/4", "4", "4/5", "5"]

  return (
    <div className={isOpen ? 'cartaSubirRutina' : 'cartaCerradoSubirRutina'}>
      <div className='subirRutinaModal'>
        <div className='nombreRutinaDiv'>
          <h1>Nombre de la rutina</h1>
          <input type="text" value={nombreDeRutina} onChange={handleChangeInputNombreRutina} />
        </div>
        <div className='ejerciciosRutinaDiv'>
          <select name="categoria" id="categoria" onChange={handleChangeSelectCategoria}>
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
              <div key={index}>
                <select name="ejercicios" id="ejericicos" onChange={handleEjerciciosRutina}>
                  <option value="Ejercicios">Ejercicio</option>
                  {ejercicios.map((e, index) =>
                    <option key={index} value={e}>{e}</option>
                  )}
                </select>
                <select name="serie" id="serie" onChange={handleEjerciciosRutina}>
                  <option value="">Series</option>
                  {series.map((e, index) =>
                    <option key={index} value={e}>{e}</option>
                  )}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className='botonesSubirYAgregar'>
          <IonIcon class='agregarIcono' icon={addCircle} onClick={() => setElementos(elementos + 1)}></IonIcon>
          <IonButton color='dark' onClick={() => console.log(ejerciciosObjeto)}>Subir rutina</IonButton>
        </div>
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaSubirRutina