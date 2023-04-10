import { IonButton } from '@ionic/react'
import { useState, useEffect } from 'react'
import MANCUERNA from "../../images/mancuerna.png"
import CartaListaRutina from './CartaListaRutina'
import CartaSubirRutina from './CartaSubirRutina'
import { db } from "../../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import categoriaSelect from '../../categoriaSelect'



const PrincipalBuscar = () => {
    /*COMENZANDO A HACER PRUEBAS CON FIREBASE*/
    const [prueba, setPrueba] = useState([])
    const [buscador, setbuscador] = useState([])

    const obtenerDatos = async () => {
        const q = query(collection(db, "rutinas"));
        onSnapshot(q, (querySnapshot) => {
            const nom = [];
            querySnapshot.forEach((doc) => {
                nom.push({ ...doc.data(), id: doc.id });
                console.log(nom)
            });
            setPrueba(nom);
            setbuscador(nom)
        })
    }
    useEffect(() => {
        obtenerDatos();
    }, [])


    /*FUNCIONES PARA ABRIR/CERRAR EL MODAL DE SUBIR NUEVA RUTINA*/
    const [abiertoSubirRutina, setAbiertoSubirRutina] = useState(false)
    const abrirModalSubirRutina = () => {
        setAbiertoSubirRutina(true)
        console.log(abiertoSubirRutina)
    }
    const cerrarModalSubirRutina = () => {
        setAbiertoSubirRutina(false)
        console.log(abiertoSubirRutina)
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
                <h1>Rutinas</h1>
                <select id="categoria" name="categoria" onChange={handleOnChangeSelect}>
                    <option value="">Categoría</option>
                    {categoriaSelect.map((e, index) =>
                        <option key={index} value={e}>{e}</option>
                    )}
                </select>
                <ion-icon name="search"></ion-icon>
                <input type="text" onChange={handleOnChange} />
            </div>
            <div className="contenedorListaRutinas">
                <div className='listaRutinas'>
                            {buscador.length === 0 ?
                                <h1 style={{ textAlign: "center" }}>No hay rutinas disponibles</h1> :
                                buscador.map((element, index) =>
                                    <CartaListaRutina key={index} lista={element} />
                                )}
                </div>

            </div>
            <IonButton className='botonSubirRutina' color="dark" onClick={abrirModalSubirRutina}>Subir Rutina</IonButton>
            <CartaSubirRutina isOpen={abiertoSubirRutina} cerrarModal={cerrarModalSubirRutina}/>
            <img className='mancuernaFondo' src={MANCUERNA} alt="" />
        </div>
    )
}

export default PrincipalBuscar