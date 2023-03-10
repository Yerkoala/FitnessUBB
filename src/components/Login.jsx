import React, { useState } from 'react'
import LoginInicioSesion from './LoginInicioSesion'
import "./style.css"
const Login = ({ abierto, cerrarModal, abrirModal }) => {

    const [inicioSesion, setinicioSesion] = useState(false)

    const abrirInicioSesion = () => {
        setinicioSesion(true)
    }

    const cerrarInicioSesion =()=>{
        setinicioSesion(false)
    }

    return (
        <div>
            <div className={abierto ? 'login' : 'loginCerrado'}>
                <div className="loginCuerpoModal">
                    <h1>FitnessUBB</h1>
                    <h3>Creación de cuenta</h3>
                    <div className='loginFormulario'>
                        <p>Nombre de usuario</p>
                        <input type="text" />
                        <p>Crear contraseña</p>
                        <input type="text" />
                        <p>Confirmar contraseña</p>
                        <input type="text" />
                    </div>
                    <button className="botonIniciarSesion">Crear Cuenta</button>

                    <div className='linea'></div>
                    <p>Ya tienes cuenta? <a onClick={abrirInicioSesion}>Ingresa aquí</a> </p>
                    <button className='botonAtras' onClick={cerrarModal}>Atras</button>
                </div>
            </div>
            <LoginInicioSesion inicioSesion={inicioSesion} cerrarInicioSesion={cerrarInicioSesion}/>
        </div>

    )
}

export default Login