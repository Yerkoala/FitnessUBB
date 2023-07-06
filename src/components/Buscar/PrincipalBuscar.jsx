import { IonButton } from '@ionic/react'
import { useState, useEffect } from 'react'
import MANCUERNA from "../../images/mancuerna.png"
import CartaListaRutina from './CartaListaRutina'
import CartaSubirRutina from './CartaSubirRutina'
import { db } from "../../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import categoriaSelect from '../../categoriaSelect'
import {obtenerDisplayNameUsuario } from '../../firebase';



const PrincipalBuscar = ({logueado}) => {
    /*OBTIENE EL NOMBRE DEL CURRENT USER LOGUEADO */
    const [displayName, setDisplayName] = useState(null)
    useEffect(() => {
        const unsubscribe = obtenerDisplayNameUsuario((name) => {
          setDisplayName(name);
        })
    
        return () => {
          unsubscribe()
        }
      })

    /*COMENZANDO A HACER PRUEBAS CON FIREBASE*/
    const [prueba, setPrueba] = useState([])
    const [buscador, setbuscador] = useState([])

    const obtenerDatos = async () => {
        const q = query(collection(db, "rutinas"))
        onSnapshot(q, (querySnapshot) => {
            const nom = [];
            querySnapshot.forEach((doc) => {
                nom.push({ ...doc.data(), id: doc.id })
            });
            console.log(nom)
            setPrueba(nom)
            setbuscador(nom)
        })
    }

    useEffect(() => {
        obtenerDatos()
    }, [])


    /*FUNCIONES PARA ABRIR/CERRAR EL MODAL DE SUBIR NUEVA RUTINA*/
    const [abiertoSubirRutina, setAbiertoSubirRutina] = useState(false)
    const abrirModalSubirRutina = () => {
        if(logueado){
            console.log("Esta logueado")
            setAbiertoSubirRutina(true)
        }else{
            alert("Debes iniciar sesión para poder subir tu rutina")
            console.log("No está logueado")
        }
    }
    const cerrarModalSubirRutina = () => {
        setAbiertoSubirRutina(false)
    }

    const buscaRutinaNombre = (palabraBuscada) => {
        const ruti = prueba.filter(user => user.nombreRutina.includes(palabraBuscada))
        setbuscador(ruti)
    }

    const buscaRutinaCategoria = (categoriaBuscada) => {
        const ruti = prueba.filter(user => user.categoria.includes(categoriaBuscada))
        setbuscador(ruti)
    }

    const handleOnChange = (e) => {
        buscaRutinaNombre(e.target.value)
    }

    const handleOnChangeSelect = (event) => {
        buscaRutinaCategoria(event.target.value)
    }

    return (
        <div className='principalPantallaBuscar'>
            <div>
                <h1 className='principalPantallaBuscarTitulo'>Rutinas</h1>
                <select id="categoria" name="categoria" onChange={handleOnChangeSelect}>
                    <option value="">Categoría</option>
                    {categoriaSelect.map((e, index) =>
                        <option key={index} value={e}>{e}</option>
                    )}
                </select>
                <ion-icon name="search"></ion-icon>
                <input className='buscarRutinaInput' type="text" onChange={handleOnChange} />
            </div>
            <div className="contenedorListaRutinas">
                <div className='listaRutinas'>
                            {buscador.length === 0 ?
                                <h1 style={{ textAlign: "center" }}>No hay rutinas disponibles</h1> :
                                buscador.map((element, index) =>
                                    <CartaListaRutina key={index} lista={element} logueado={logueado}/>
                                )}
                </div>

            </div>
            <IonButton className='botonSubirRutina' color="dark" onClick={abrirModalSubirRutina}>Subir Rutina</IonButton>
            <CartaSubirRutina isOpen={abiertoSubirRutina} cerrarModal={cerrarModalSubirRutina} nomUsuario={displayName}/>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalBuscar