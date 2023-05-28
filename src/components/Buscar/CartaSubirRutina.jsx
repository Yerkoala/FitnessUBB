import { IonButton, IonIcon } from '@ionic/react'
import { addCircle} from 'ionicons/icons'
import React, { useState } from 'react'
import categoriaSelect from '../../categoriaSelect'
import CartaListaEjerciciosSubir from './CartaListaEjerciciosSubir'
import { v4 as uuid } from 'uuid'; //nos genera id
import { db } from "../../firebase"
import { setDoc, doc } from "firebase/firestore"

const CartaSubirRutina = ({ isOpen, cerrarModal,nomUsuario }) => {
  const [modalEjercicios, setModalEjercicios] = useState(false)
  const abrirCerrarModalEjercicios = () => {
    setModalEjercicios(!modalEjercicios)
  }

  const [nombreDeRutina, setNombreDeRutina] = useState("")
  const [categoriaRutina, setCategoriaRutina] = useState("")
  const [ejerciciosObjeto, setEjerciciosObjeto] = useState([])

  //GUARDA EL NOMBRE DE LA RUTINA
  const handleChangeInputNombreRutina = (e) => {
    setNombreDeRutina(e.target.value)
  }
  //GUARDA LA CATEGORÍA DE LA RUTINA
  const handleChangeSelectCategoria = (e) => {
    setCategoriaRutina(e.target.value)
  }
  //GUARDA LOS EJERCICIOS QUE TIENEN LA RUTINA
  const agregarEjercicio = (nombreEjercicio) => {
    setEjerciciosObjeto([...ejerciciosObjeto, nombreEjercicio])
  }

  const subirRutina = async () => {
    if (window.confirm('Seguro que desea subir esta rutina?')) {
      const docData = {
        nombreRutina: nombreDeRutina,
        categoria: categoriaRutina,
        ejercicios: ejerciciosObjeto,
        usuario: nomUsuario,
        valoracion: [5]
      }
      await setDoc(doc(db, "rutinas", uuid()), docData)
      setNombreDeRutina('')
      setCategoriaRutina('')
      setEjerciciosObjeto([])
      cerrarModal()
  }}


  return (
    <div className={isOpen ? 'cartaSubirRutina' : 'cartaCerradoSubirRutina'}>
      <div className='Modal'>
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
            {ejerciciosObjeto.map((e, index) =>
              <p key={index}>{e}</p>
            )}
          </div>
        </div>

        <div className='botonesSubirYAgregar'>
          <IonIcon class='agregarIcono' icon={addCircle} onClick={abrirCerrarModalEjercicios}></IonIcon>
          <IonButton color='dark' onClick={subirRutina}>Subir rutina</IonButton>
        </div>
        <CartaListaEjerciciosSubir isOpen={modalEjercicios} cerrarModal={abrirCerrarModalEjercicios} agregarEjercicio={agregarEjercicio} />
      </div>
      <IonButton onClick={cerrarModal} color='dark'>Cerrar</IonButton>
    </div>
  )
}

export default CartaSubirRutina