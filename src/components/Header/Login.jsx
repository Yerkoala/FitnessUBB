import React, { useState } from 'react'
import LoginInicioSesion from './LoginInicioSesion'
import "../style.css"
import { crearNuevoUsuario } from '../../firebase'
import { IonInput, IonItem, IonLabel } from '@ionic/react'

const Login = ({ abierto, cerrarModal, sesionIniciada, logueado }) => {
    const [inicioSesion, setinicioSesion] = useState(false)

    const abrirInicioSesion = () => {
        cerrarModal()
        setinicioSesion(true)
    }

    const cerrarInicioSesion = () => {
        setinicioSesion(false)
    }

    const [username, setUsername] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const crearCuenta = () => {
        if (window.confirm("¿Está seguro que desea crear esta cuenta?")) {
            if (password !== rePassword) {
                alert('Las contraseñas no son iguales')
            }
            if (username.trim() === '' || password.trim() === '' || correo.trim() === '' || rePassword.trim() === '') {
                alert('Todos los campos deben estar rellenados')
            }
            crearNuevoUsuario(correo, password, username)
            setUsername('')
            setCorreo('')
            setPassword('')
            setRePassword('')
            alert("Cuenta creada con éxito por favor inicia sesión")
            abrirInicioSesion()
        }
    }

    return (
        <div>
            <div className={abierto ? 'login' : 'loginCerrado'}>
                <div className="loginCuerpoModal">
                    <h1>FitnessUBB</h1>
                    <h3>Creación de cuenta</h3>
                    <div className='loginFormulario'>
                        <p>Nombre de usuario</p>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Máximo 15 carácteres' maxLength={15} />
                        <p>Correo</p>
                        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder='example@gmail.com' />
                        <p>Crear contraseña</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                        <p>Confirmar contraseña</p>
                        <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} placeholder='Contraseña' />
                    </div>
                    <button className="botonIniciarSesion" onClick={crearCuenta}>Crear Cuenta</button>

                    <div className='linea'></div>
                    <p>Ya tienes cuenta? <a onClick={abrirInicioSesion}>Ingresa aquí</a> </p>
                    <button className='botonAtras' onClick={cerrarModal}>Atras</button>
                </div>
            </div>
            <LoginInicioSesion inicioSesion={inicioSesion} cerrarInicioSesion={cerrarInicioSesion} abrirCrearCuenta={cerrarModal} sesionIniciada={sesionIniciada} logueado={logueado} />
        </div>

    )
}

export default Login