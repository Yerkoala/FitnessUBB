import React, { useState } from 'react'
import "../style.css"
import { loginUsuario } from '../../firebase'

const LoginInicioSesion = ({ inicioSesion, cerrarInicioSesion,abrirCrearCuenta,sesionIniciada}) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const iniciarSesion = () => {
        loginUsuario(usuario, password)
            .then(user => {
                if (user) {
                    setUsuario('')
                    setPassword('')
                    cerrarInicioSesion()
                    sesionIniciada()
                    setError('')
                } else {
                    setError('¡Correo o contraseña incorrectos!')
                }
            })
            .catch(error => {
                console.log("Error de autenticación:", error);
            })
    }
    

    const volverAtras=()=>{
        cerrarInicioSesion()
        abrirCrearCuenta()
        setUsuario('')
        setPassword('')
        setError('')
    }


    return (
        <div className={inicioSesion ? 'login' : 'loginCerrado'}>
            <div className="loginCuerpoModal">
                <h1>FitnessUBB</h1>
                <h3>Iniciar sesión</h3>
                <div className='loginFormulario'>
                    <p>Correo</p>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder='Correo'/>
                    <p>Contraseña</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña'/>
                </div>
                {error && <p className="errorMensaje">{error}</p>} {/* Muestra el mensaje de error si existe */}
                <button className='botonIniciarSesion' onClick={iniciarSesion}>Iniciar sesión</button>
                <button className='botonAtras' onClick={volverAtras}>Atrás</button>
            </div>
        </div>
    )
}

export default LoginInicioSesion