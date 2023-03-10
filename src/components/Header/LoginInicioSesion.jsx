import React from 'react'
import "../style.css"

const LoginInicioSesion = ({ inicioSesion,cerrarInicioSesion }) => {
    return (
        <div className={inicioSesion ? 'login' : 'loginCerrado'}>
            <div className="loginCuerpoModal">
                <h1>FitnessUBB</h1>
                <h3>Iniciar sesión</h3>
                <div className='loginFormulario'>
                    <p>Nombre de usuario</p>
                    <input type="text" />
                    <p>Contraseña</p>
                    <input type="text" />
                </div>
                <button className='botonIniciarSesion'>Iniciar sesión</button>
                <button className='botonAtras' onClick={cerrarInicioSesion}>Atras</button>
            </div>
        </div>
    )
}

export default LoginInicioSesion